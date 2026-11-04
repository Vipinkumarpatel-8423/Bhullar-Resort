
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Services", href: "/#services" },
    // { name: "Weddings", href: "/#weddings" },
    // { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Active navigation check
  const isActive = (item) => {
    if (item.href === "/") {
      return location.pathname === "/" &&
        (location.hash === "" || location.hash === "#home");
    }

    if (item.href.startsWith("/#")) {
      return location.pathname === "/" &&
        location.hash === item.href.substring(1);
    }

    return location.pathname === item.href;
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-stone-200/70 bg-[#faf9f6]/95 backdrop-blur-md">

      <div className="mx-auto flex h-[72px] items-center justify-between px-5 sm:h-[82px] sm:px-6 lg:max-w-[1400px] lg:px-10">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2"
        >
          <div className="leading-none">
            <div className="font-serif text-[27px] tracking-[-1.5px] text-[#24211d] sm:text-[30px]">
              Opulence
              <span className="text-[#b18a4a]">.</span>
            </div>

            <div className="mt-1 text-[8px] font-medium uppercase tracking-[4px] text-[#8b7350]">
              Resorts
              {/* & Banquets */}
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => {
            const active = isActive(item);

            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={`group relative py-2 text-[14px] font-medium tracking-wide transition-colors duration-300 ${
                  active
                    ? "text-[#b18a4a]"
                    : "text-[#3f3b36] hover:text-[#b18a4a]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-[#b18a4a] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </NavLink>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/916284315908"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 border border-[#b18a4a] bg-[#b18a4a] px-4 py-3 text-[11px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-[#9b753c] sm:px-5 sm:text-[12px]"
          >
            Book Your Event

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-[#292621] transition-colors hover:text-[#b18a4a] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-stone-200 bg-[#faf9f6] transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="px-6 py-5">
          {navItems.map((item) => {
            const active = isActive(item);

            return (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className={`block border-b border-stone-200 py-4 text-sm tracking-wide transition-colors duration-300 ${
                  active
                    ? "text-[#b18a4a]"
                    : "text-[#3f3b36] hover:text-[#b18a4a]"
                }`}
              >
                {item.name}
              </NavLink>
            );
          })}

          {/* MOBILE CTA */}
          <a
            href="https://wa.me/916284315908"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="mt-5 flex items-center justify-center gap-2 bg-[#b18a4a] px-5 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:bg-[#9b753c]"
          >
            Book Your Event
            <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
