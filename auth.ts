import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./app/lib/data-mapper";

export const authOptions: NextAuthOptions = {
  secret: "iekAgfR0yy/M38RodqQCmWmS+9cw836S2QPuqGPsDj4=",
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.osoba.findFirst({
          where: { email: credentials.email, jmeno: credentials.password },
        });

        if (!user) return null;

        return {
          id: user.osobaid.toString(),
          name: user.jmeno,
          email: user.email,
        };
      },
    }),
  ],
};
