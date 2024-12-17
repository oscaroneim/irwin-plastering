"use client";

import Image from "next/image";
import Map from "../../../public/images/map.png";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroBanner() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center text-center space-y-4">
      {/* Map Image - Hidden on mobile */}
      <div className="relative hidden md:block">
        <Image
          src={Map}
          alt="Oxfordshire & Buckinghamshire"
          layout="responsive"
        />
      </div>

      {/* h1 - Hidden on mobile */}
      <h1 className="hidden md:block text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold z-10 text-darkblue text-center drop-shadow-custom">
        OXFORDSHIRE &<span className="block">BUCKINGHAMSHIRE</span>
      </h1>

      {/* h2 - Always visible */}
      <h2 className="text-orange text-2xl md:text-2xl lg:text-4xl font-bold italic text-center drop-shadow-custom">
        We&apos;ve got you<span className="block">covered!</span>
      </h2>

      {/* Button */}
      <Link href="/contact">
        <button className="w-auto h-auto bg-lightblue text-white font-bold px-6 py-4 rounded-md drop-shadow-lg hover:bg-darkblue">
          Submit an enquiry
        </button>
      </Link>
    </div>
  );
}
