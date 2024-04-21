import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { User } from "./app/lib/definitions";
import bcrypt from "bcrypt";
import { prisma } from "./app/lib/data";

export const authOptions: NextAuthOptions = {
  secret: "iekAgfR0yy/M38RodqQCmWmS+9cw836S2QPuqGPsDj4=",
  session: {
    strategy: "jwt",
  },
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

        const mechanic = await prisma.$queryRaw<User[]>`
          SELECT mechanik.id_mechanik as id, osoba.jmeno as name, osoba.email, mechanik.heslo_hash as password
          FROM mechanik
          JOIN osoba ON mechanik.id_osoba = osoba.id_osoba
          WHERE osoba.email=${credentials.email} `;

        if (mechanic.length != 0) {
          const mechPasswordMatch = await bcrypt.compare(
            credentials.password,
            mechanic[0].password
          );

          if (mechPasswordMatch) {
            return {
              id: mechanic[0].id.toString(),
              name: mechanic[0].name,
              email: mechanic[0].email,
              isManager: false,
            };
          }
        }
        
        const administrator = await prisma.$queryRaw<User[]>`
          SELECT administrator.id_admin as id, osoba.jmeno as name, osoba.email, administrator.heslo_hash as password
          FROM administrator
          JOIN osoba ON administrator.id_osoba = osoba.id_osoba
          WHERE osoba.email=${credentials.email} `;

        if (administrator.length == 0) {
          return null;
        }
        const adminPasswordMatch = await bcrypt.compare(
          credentials.password,
          administrator[0].password
        );

        if (adminPasswordMatch) {
          return {
            id: administrator[0].id.toString(),
            name: administrator[0].name,
            email: administrator[0].email,
            isManager: true,
          };
        }
        
        return null;
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          isManager: token.isManager,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          isManager: u.isManager,
        };
      }
      return token;
    },
  },
};
