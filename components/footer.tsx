import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content mt-20">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" href="/contacts">Kontakty</Link>
        <Link className="link link-hover" href="/services">Naše služby</Link>
        <Link className="link link-hover" href="#">Obchodní podmínky</Link>
        <Link className="link link-hover" href="#">Zásady ochrany osobních údajů</Link>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Autoservis SWI</p>
      </aside>
    </footer>
  );
}
