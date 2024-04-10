"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/reservation", name: "Reservation" },
  { path: "/contacts", name: "Contacts" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isLoggedIn = false; // TODO: replace this with your actual login state

  return (
    <nav className="md:navbar bg-base-100 flex justify-between ">
      <div>
        {links.map((el) => (
          el.path === pathname ? (
            <Link className="btn btn-active btn-neutral text-xl m-1" href={el.path} key={el.name}>
              {el.name}
            </Link>
          ) : (
            <Link className="btn btn-ghost text-xl m-1" href={el.path} key={el.name}>
              {el.name}
            </Link>
          )
        ))}
      </div>
      <div>
        {/*login for employees where manager is going to be assigning reservations to emloyees and mechanics are going see their assigned reservations*/}
        {isLoggedIn ? (
          <Link className="btn btn-active btn-neutral text-xl m-1" href="/admin">
            Admin
          </Link>
        ) : (
          <Link className="btn btn-active btn-neutral text-xl m-1" href="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
