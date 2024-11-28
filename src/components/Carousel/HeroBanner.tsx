import Image from "next/image";
import Map from "../../../public/images/map.png";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center text-center space-y-4">
      <div>
        <div className="relative">
          <Image
            src={Map}
            alt="Oxfordshire & Buckinghamshire"
            layout="responsive"
          />
        </div>
      </div>
      <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold z-10 text-darkblue text-center drop-shadow-custom">
        OXFORDSHIRE &<span className="block">BUCKINGHAMSHIRE</span>
      </h1>
      <h2 className="text-orange text-2xl md:text-2xl lg:text-4xl font-bold italic text-center drop-shadow-custom">
        We&apos;ve got you<span className="block">covered!</span>
      </h2>
      <Link href="/contact">
        <button className="w-auto h-auto bg-lightblue text-white font-bold px-6 py-4 rounded-md drop-shadow-lg">
          Get a quote
        </button>
      </Link>
    </div>
  );
}
