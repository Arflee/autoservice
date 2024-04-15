"use client";

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import logo from "../public/logo.png";
import { useSession } from "next-auth/react";

const links = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/reservation", name: "Reservation" },
  { path: "/contacts", name: "Contacts" },
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
              src={logo}
              alt="Autoservis logo"
              width={230}
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
