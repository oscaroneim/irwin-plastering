import React from "react";
import FooterLogo from "/public/images/svg/footerlogo.svg";
import Email from "/public/images/svg/🦆 icon _email_.svg";
import Whatsapp from "/public/images/svg/🦆 icon _whatsapp_.svg";
import Insta from "/public/images/svg/🦆 icon _instagram_.svg";
import Link from "next/link";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className="w-full h-auto bg-darkblue text-white font-bold">
      <section className="py-8">
        <FooterLogo className="w-[188px] h-[80px] ml-1 lg:ml-2 mx-auto" />

        <div className="gap-8 flex flex-col md:flex-row md:justify-between mx-12">
          <div className="mb-6 lg:mb-0">
            <h3 className="text-lightblue font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <Link href="">
                <li>Services</li>
              </Link>
              <Link href="">
                <li>Projects</li>
              </Link>
              <Link href="">
                <li>Why us</li>
              </Link>
              <Link href="">
                <li>Contact Us</li>
              </Link>
              <Link href="">
                <li>FAQ</li>
              </Link>
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
            <div className="flex items-center space-x-2">
              <Whatsapp />
              <div className="flex flex-col">
                <h2 className="text-lightblue font-bold">Whatsapp</h2>
                <p>07746882369</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Email />
              <div className="flex flex-col">
                <h2 className="text-lightblue font-bold">Email us</h2>
                <p>irwinplastering@gmail.com</p>
              </div>
            </div>

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
