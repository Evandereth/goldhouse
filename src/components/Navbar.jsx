import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";

const links = ["Home", "About Us", "Projects", "Services", "Pricing"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-cream/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="wide-container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Logo />

        <ul className="hidden items-center gap-5 text-sm md:flex lg:gap-8 lg:text-base">
          {links.map((l, i) => (
            <li key={l} className="flex items-center gap-3">
              <a
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="transition hover:text-brand"
              >
                {l}
              </a>
              {i < links.length - 1 && <span className="h-1 w-1 rounded-full bg-ink" />}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-xs">
          
          <Icon name="search" size={25} className="cursor-pointer transition hover:text-brand" />
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden cursor-pointer">
            {open ? <Icon name="close" size={25} /> : <Icon name="menu" size={25} />}
          </button>
          <Icon name="menu" size={25} className="hidden cursor-pointer" />
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="space-y-4 px-6 pb-6 text-sm">
          {links.map((l) => (
            <li key={l}>
              <a onClick={() => setOpen(false)} href={`#${l.toLowerCase().replace(" ", "-")}`}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}