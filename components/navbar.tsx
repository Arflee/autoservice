"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";

const links = [
  { path: "/", name: "Domů" },
  { path: "/services", name: "Služby" },
  { path: "/reservation", name: "Rezervace" },
  { path: "/contacts", name: "Kontakty" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { status } = useSession({
    required: false,
  });

  const isLoggedIn = status == "authenticated";

  return (
    <nav className="navbar bg-base-200 flex justify-between">
      <div>
        <Link href="/">
          <div className="ml-10 mr-10 ">
            <Image
              src="/logo.png"
              alt="Autoservis logo"
              width={230}
              height={386}
              className="mt"
            />
          </div>
        </Link>
        {links.map((el) =>
          el.path === pathname ? (
            <Link
              className="btn btn-active btn-neutral text-xl m-1 text-slate-300"
              href={el.path}
              key={el.name}
            >
              {el.name}
            </Link>
          ) : (
            <Link
              className="btn btn-ghost text-xl m-1 text-slate-800"
              href={el.path}
              key={el.name}
            >
              {el.name}
            </Link>
          )
        )}
      </div>
      <div>
        {/*login for employees where manager is going to be assigning reservations to emloyees and mechanics are going see their assigned reservations*/}
        {isLoggedIn ? (
          <Link
            className="btn btn-ghost text-xl m-1 text-slate-800"
            href="/admin"
          >
            Admin
          </Link>
        ) : (
          <Link
            className="btn btn-ghost text-xl m-1 text-slate-800"
            href="/login"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
