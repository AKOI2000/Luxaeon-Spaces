import Link from "next/link";

const COLUMNS = [
  {
    heading: "Studio",
    links: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/projects", label: "Projects" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/journal", label: "Journal" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-border">
          <div className="footer__top grid-3">
            <div className="footer__brand">
              <p className="footer__logo">Spaces</p>
              <p className="text-grey">That speak before you do</p>
            </div>

            {COLUMNS.map((col) => (
              <div key={col.heading} className="footer__col">
                <h5>{col.heading}</h5>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer__bottom flex-between">
            <span className="text-grey">
              © {new Date().getFullYear()} Luxaeon Spaces
            </span>
            <span className="text-grey">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
