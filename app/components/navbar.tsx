import Link from "next/link";

const links = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/contacts", name: "Contacts" },
  { path: "/reservation", name: "Reservation" },
];

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      {links.map((el) => (
        <Link className="btn btn-ghost text-xl" href={el.path} key={el.name}>
          {el.name}
        </Link>
      ))}
    </nav>
  );
}
