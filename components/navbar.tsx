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

  return (
    <nav className="navbar bg-base-100">
      {links.map((el) => (
        <Link
          className={clsx("btn btn-active text-xl m-1", {
            "bg-primary": pathname == el.path,
          })}
          href={el.path}
          key={el.name}
        >
          {el.name}
        </Link>
      ))}
    </nav>
  );
}
