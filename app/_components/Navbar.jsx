"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container header_bar flex-between">
        <Link href="/" className="header_logo" onClick={() => setOpen(false)}>
          <Image src={"/logo2.png"} alt="Luxaeon Spaces" width={500} height={400} />
        </Link>

        <nav className="header_nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="header__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header_actions flex-center">
          <Link href="/contact" className="btn">
            Get in touch
          </Link>
          <button
            className="header_toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>
        </div>

        {open && (
          <nav
            className="header_mobile-nav"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="header_mobile-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* <AnimatePresence>
          {open && (
            <motion.nav
              className="header_mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="header_mobile-link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence> */}
      </div>
    </header>
  );
}

export default Navbar;
