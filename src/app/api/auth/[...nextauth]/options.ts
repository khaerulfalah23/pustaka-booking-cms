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

        const isAdmin = user.role === 'admin';

        if (isMatch && isAdmin) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
    newUser: '/signup',
  },
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;

      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

export default authOptions;
