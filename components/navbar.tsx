'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

const links = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/contacts", name: "Contacts" },
  { path: "/reservation", name: "Reservation" },
];

export default function Navbar() {
  const pathname = usePathname()
	
  return (
    <nav className="navbar bg-base-100">
      {links.map((el) => (
				el.path == pathname ?
			<Link className="btn btn-active btn-neutral text-xl m-1" href={el.path} key={el.name}>
				{el.name}
			</Link> :
			<Link className="btn btn-ghost text-xl m-1" href={el.path} key={el.name}>
          {el.name}
			</Link>
      ))}
    </nav>
  );
}
