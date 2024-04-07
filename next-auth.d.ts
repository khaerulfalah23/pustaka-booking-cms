import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: { id: any } & DefaultSession['user'];
  }

  interface User {
    id: string;
    role: string;
    address: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: string;
    address: string;
  }
}
