import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Weddings", href: "#weddings" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-stone-200/70 bg-[#faf9f6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2"
        >
          <div className="leading-none">
            <div className="font-serif text-[30px] tracking-[-1.5px] text-[#24211d]">
              Bhullar
              <span className="text-[#b18a4a]">.</span>
            </div>

            <div className="mt-1 text-[8px] font-medium uppercase tracking-[4px] text-[#8b7350]">
              Resort & Banquets
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`group relative py-2 text-[14px] font-medium tracking-wide transition-colors duration-300 ${index === 0
                ? "text-[#b18a4a]"
                : "text-[#3f3b36] hover:text-[#b18a4a]"
                }`}
            >
              {item.name}

              <span
                className={`absolute bottom-0 left-0 h-[1px] bg-[#b18a4a] transition-all duration-300 ${index === 0
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                  }`}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group flex items-center gap-2 border border-[#b18a4a] bg-[#b18a4a] px-5 py-3 text-[12px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-[#9b753c]"
          >
            Book Your Event

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center text-[#292621] lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-stone-200 bg-[#faf9f6] transition-all duration-300 lg:hidden ${isOpen
          ? "max-h-[500px] opacity-100"
          : "max-h-0 opacity-0"
          }`}
      >
        <nav className="px-6 py-5">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block border-b border-stone-200 py-4 text-sm tracking-wide ${index === 0
                ? "text-[#b18a4a]"
                : "text-[#3f3b36]"
                }`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 bg-[#b18a4a] px-5 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] text-white"
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