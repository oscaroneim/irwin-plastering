'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button className="p-2 focus:outline-none" onClick={toggleMenu} aria-label="Toggle Menu">
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex flex-col bg-darkblue">
          <div className="w-full flex ml-[15%] mt-20">
            <Image
              src="/images/svg/footerlogo.svg"
              alt="Irwin logo"
              width={250}
              height={200}
              priority
            />
          </div>
          <button
            className="absolute top-4 right-4 text-5xl text-white"
            onClick={handleClose}
            aria-label="Close Menu"
          >
            &times;
          </button>

          <div className="flex-1 flex mt-10 justify-center">
            <ul className="space-y-6 text-xl text-white text-center">
              <li>
                {pathname === '/' ? (
                  <a href="#top" onClick={handleClose} className="hover:text-blue-600">
                    Home
                  </a>
                ) : (
                  <Link href="/" onClick={handleClose}>
                    Home
                  </Link>
                )}
              </li>
              <li>
                {pathname === '/' ? (
                  <a href="#services" onClick={handleClose} className="hover:text-blue-600">
                    Services
                  </a>
                ) : (
                  <Link href="/#services" onClick={handleClose}>
                    Services
                  </Link>
                )}
              </li>
              <li>
                {pathname === '/' ? (
                  <a href="#expertise" onClick={handleClose} className="hover:text-blue-600">
                    Expertise
                  </a>
                ) : (
                  <Link href="/#expertise" onClick={handleClose}>
                    Expertise
                  </Link>
                )}
              </li>
              <li>
                {pathname === '/' ? (
                  <a href="#whyUs" onClick={handleClose} className="hover:text-blue-600">
                    About Us
                  </a>
                ) : (
                  <Link href="/#whyUs" onClick={handleClose}>
                    About Us
                  </Link>
                )}
              </li>
              <li>
                <Link href="/contact" onClick={handleClose} className="hover:text-blue-600">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
