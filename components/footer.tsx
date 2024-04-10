import Link from "next/link";


export default function Footer() {
    //todo make useful links
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" href="/about-us">About us</Link>
        <Link className="link link-hover" href="/contacts">Contacts</Link>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
}
