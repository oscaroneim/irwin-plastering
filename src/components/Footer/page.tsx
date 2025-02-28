"use client";

import React from "react";
import FooterLogo from "/public/images/svg/footerlogo.svg";
import Email from "/public/images/svg/🦆 icon _email_.svg";
import Whatsapp from "/public/images/svg/🦆 icon _whatsapp_.svg";
import Insta from "/public/images/svg/🦆 icon _instagram_.svg";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import "./page.css";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    e.preventDefault();

    if (pathname === "/") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${hash}`);
    }
  };

  return (
    <footer className="w-full h-auto bg-darkblue text-white font-bold mt-8">
      <section className="py-8 md:py-2 relative">
        <div className="flex md:ml-4 ml-2 mb-4 md:mb-0 relative w-auto">
          <a href="#top" onClick={(e) => handleNavigation(e, "#top")}>
            <FooterLogo className="w-[188px] h-[80px] md:w-[288px] md:h-[180px] ml-1 mx-auto md:mt-0 max-w-full" />
          </a>
          <div className="border-top-custom absolute top-[60px] md:top-[120.5px] mx-auto w-[78%] md:w-[80%] laptop:w-[90%] md:left-24"></div>
        </div>
        <div className="gap-8 flex flex-col md:flex-row md:justify-evenly mx-12">
          <div className="mb-6 lg:mb-0">
            <h3 className="text-lightblue font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavigation(e, "#services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  onClick={(e) => handleNavigation(e, "#expertise")}
                >
                  Expertise
                </a>
              </li>
              <li>
                <a href="#whyUs" onClick={(e) => handleNavigation(e, "#whyUs")}>
                  Why Us
                </a>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 lg:mb-0">
            <h3 className="text-lightblue font-bold mb-4">Working hours</h3>
            <div className="space-y-2">
              <p>Mon : 8:00am - 5:00pm</p>
              <p>Tues : 8:00am - 5:00pm</p>
              <p>Wed : 8:00am - 5:00pm</p>
              <p>Thurs : 8:00am - 5:00pm</p>
              <p>Fri : 8:00am - 5:00pm</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <a
              href="https://wa.me/447746882369"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center space-x-2">
                <Whatsapp className="flex-shrink-0" />
                <div className="flex flex-col">
                  <h2 className="text-lightblue font-bold">Whatsapp</h2>
                  <p>01494211924</p>
                </div>
              </div>
            </a>
            <a href="mailto:irwinplastering@gmail.com" className="block">
              <div className="flex items-center space-x-2">
                <Email className="flex-shrink-0" />
                <div className="flex flex-col">
                  <h2 className="text-lightblue font-bold">Email us</h2>
                  <p>irwinplastering@gmail.com</p>
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/irwin_plastering?igsh=MXVmZWU2bGdlMTMybg=="
              className="block"
            >
              <div className="flex items-center space-x-2">
                <Insta className="flex-shrink-0" />
                <div className="flex flex-col">
                  <h2 className="text-lightblue font-bold">Instagram</h2>
                  <p>@irwinplastering</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <p className="mt-8 text-center text-[10px]">
        IRWIN PLASTERING LTD &copy; 2024 | ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}
