import Link from "next/link";
import React from "react";

export default function Success() {
  return (
    <div className="text-center my-20">
      <h1 className="md:text-6xl font-bold text-orange text-4xl md:w-[645px] mx-auto m-auto">
        Your enquiry has been received!
      </h1>
      <h2 className="text-lightblue font-bold font-montserrat text-3xl lg:w-[800px] mx-auto mt-10">
        What happens next?
      </h2>
      <p className="mt-10 font-montserrat text-xl md:text-3xl md:w-[680px] lg:w-[900px] mx-auto">
        Our team will reach out to you soon using the phone number or email
        address you provided, so keep an eye out. If you have any questions or
        concerns in the meantime, don’t hesitate to get in touch with us!
      </p>
      <a
        href="https://wa.me/447746882369?text=Hi%2C%20I%E2%80%99d%20like%20to%20get%20a%20quote%20for%20your%20services.%20My%20project%20involves%20%5Bbrief%20description%5D.%20Could%20you%20let%20me%20know%20the%20next%20steps%3F%20Thanks%21"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <p
          className="
        text-orange font-bold mt-4 text-xl md:text-3xl"
        >
          01494211924
        </p>
      </a>
      <p className="mt-16">
        <Link href={"/"} className=" font-bold underline">
          Go back to the homepage
        </Link>
      </p>
    </div>
  );
}
