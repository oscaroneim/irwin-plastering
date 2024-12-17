"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        className="p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 text-2xl text-black"
            onClick={handleClose}
            aria-label="Close Menu"
          >
            &times;
          </button>

          <ul className="space-y-6 text-xl text-black">
            <li>
              {pathname === "/" ? (
                <a
                  href="#top"
                  onClick={handleClose}
                  className="hover:text-blue-600"
                >
                  Home
                </a>
              ) : (
                <Link href="/" onClick={handleClose}>
                  Home
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <a
                  href="#services"
                  onClick={handleClose}
                  className="hover:text-blue-600"
                >
                  Services
                </a>
              ) : (
                <Link href="/#services" onClick={handleClose}>
                  Services
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <a
                  href="#expertise"
                  onClick={handleClose}
                  className="hover:text-blue-600"
                >
                  Expertise
                </a>
              ) : (
                <Link href="/#expertise" onClick={handleClose}>
                  Expertise
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <a
                  href="#whyUs"
                  onClick={handleClose}
                  className="hover:text-blue-600"
                >
                  About Us
                </a>
              ) : (
                <Link href="/#whyUs" onClick={handleClose}>
                  About Us
                </Link>
              )}
            </li>
            <li>
              <Link
                href="/contact"
                onClick={handleClose}
                className="hover:text-blue-600"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
