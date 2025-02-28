import Logo from "/public/images/svg/irwin-plastering-logo.svg";
import Logo2 from "/public/images/svg/logobullet.svg";
import Link from "next/link";
import Phone from "../../../public/images/svg/whatsappNav.svg";
import HamburgerMenu from "../HamburgerMenu/page";
import React from "react";
import "./page.css";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between mb-2 md:mb-2 bg-white top-0 z-50 sticky md:static">
      <div className="w-1/2 h-auto">
        <Link href="/">
          <Logo className="w-[188px] h-[80px] pt-2 md:hidden" />
        </Link>

        <Link href="/">
          <Logo2 className="w-full h-auto hidden md:block pt-2" />
        </Link>
        <div className="border-top-custom-head absolute top-[60px] md:top-[102px] mx-auto w-[78%] md:w-[92.5%] md:left-24"></div>
      </div>
      <div className="md:hidden pr-2">
        <HamburgerMenu />
      </div>
      <div className="relative hidden md:block"></div>
      <div className="md:flex md:items-center md:justify-between font-bold md:gap-4 hidden pr-4">
        <p className="text-darkblue font-bold md:text-xl lg:text-2xl">
          Call us
        </p>
        <Phone className="w-9 h-9" />
        <a
          href="https://wa.me/447746882369?text=Hi%2C%20I%E2%80%99d%20like%20to%20get%20a%20quote%20for%20your%20services.%20My%20project%20involves%20%5Bbrief%20description%5D.%20Could%20you%20let%20me%20know%20the%20next%20steps%3F%20Thanks%21"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <p className="text-orange md:text-xl lg:text-2xl mr-4">01494211924</p>
        </a>
      </div>
    </nav>
  );
}
