export default function Footer() {
    //todo make useful links
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
}
