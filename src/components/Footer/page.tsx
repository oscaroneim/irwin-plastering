"use client";

import React from "react";
import FooterLogo from "/public/images/svg/footerlogo.svg";
import Email from "/public/images/svg/🦆 icon _email_.svg";
import Whatsapp from "/public/images/svg/🦆 icon _whatsapp_.svg";
import Insta from "/public/images/svg/🦆 icon _instagram_.svg";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import "./page.css";

export default function Footer({ className }: { className?: string }) {
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
      router.push(`/#${hash.replace("#", "")}`);
    }
  };

  return (
    <footer className="w-full h-auto bg-darkblue text-white font-bold mt-8">
      <section className="py-8 md:py-2 relative">
        <div className="flex md:ml-4 ml-2 mb-4 md:mb-0 relative w-full">
          <a href="#top" onClick={(e) => handleNavigation(e, "#top")}>
            <FooterLogo className="w-[188px] h-[80px] md:w-[288px] md:h-[180px] ml-1 mx-auto md:mt-0" />
          </a>
          <div className="border-top-custom absolute top-[60px] md:top-[120.5px] mx-auto w-[78%] md:w-[90%] md:left-24"></div>
        </div>
        <div className="gap-8 flex flex-col md:flex-row md:justify-evenly mx-12">
          <div className="mb-6 lg:mb-0">
            <h3 className="text-lightblue font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {/* Smooth scrolling for sections */}
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
              {/* Contact page link */}
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
              href="https://wa.me/447746882369?text=Hi%2C%20I%E2%80%99d%20like%20to%20get%20a%20quote%20for%20your%20services.%20My%20project%20involves%20%5Bbrief%20description%5D.%20Could%20you%20let%20me%20know%20the%20next%20steps%3F%20Thanks%21"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center space-x-2">
                <Whatsapp />
                <div className="flex flex-col">
                  <h2 className="text-lightblue font-bold">Whatsapp</h2>
                  <p>07746882369</p>
                </div>
              </div>
            </a>
            <a
              href="mailto:irwinplastering@gmail.com?subject=Inquiry%20About%20Your%20Services&body=Hi%20there%20%2C%0A%0AI%E2%80%99d%20like%20to%20learn%20more%20about%20your%20services.%20Could%20you%20provide%20me%20with%20more%20details%3F%0A%0AThanks%2C%0A%5BYour%20Name%5D"
              className="block"
            >
              <div className="flex items-center space-x-2">
                <Email />
                <div className="flex flex-col">
                  <h2 className="text-lightblue font-bold">Email us</h2>
                  <p>irwinplastering@gmail.com</p>
                </div>
              </div>
            </a>
            <div className="flex items-center space-x-2">
              <Insta />
              <div className="flex flex-col">
                <h2 className="text-lightblue font-bold">Instagram</h2>
                <p>@irwinplastering</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="mt-8 text-center text-[10px]">
        IRWIN PLASTERING LTD &copy; 2024 | ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}
