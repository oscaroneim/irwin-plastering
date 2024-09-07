import React, { Component } from "react";
import FooterLogo from "/public/images/svg/footerlogo.svg";

export default function Footer() {
  return (
    <footer className="w-full h-auto bg-darkblue text-white">
      <div className="">
        <div className="">
          <FooterLogo className="w-[188px] h-[80px] pt-2" />
          <p>
            Rendering Specialists who handle Plastering, K Rend, Coloured
            Renders, Liquid Screed and Renderins. We operate in Oxfordshire and
            Buckinghamshire
          </p>
        </div>
        <div className="">
          <h2>Contact Us</h2>
          <p>Phone: 01234 567 890</p>
          <p>Email:</p>
        </div>
      </div>
    </footer>
  );
}
