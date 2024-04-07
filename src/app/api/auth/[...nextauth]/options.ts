import { NextAuthOptions } from 'next-auth';

import { comparePassword } from '@/lib/utils';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../../../lib/prisma';

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (!user) {
          return null;
        }

        const isMatch = await comparePassword(
          credentials?.password!!,
          user.password
        );

        if (isMatch) {
          return user;
        }

        return null as any;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
    newUser: '/signup',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role,
          address: user.address,
        };
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          address: token.address,
        },
      };
    },
  },
  session: {
    strategy: 'jwt',
  },
};

export default authOptions;
