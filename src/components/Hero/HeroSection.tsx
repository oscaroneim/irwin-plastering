import Link from "next/link";
import Desktop from "../../../public/images/plasteringBanner1.png";
import Mobile from "../../../public/images/mobileHero.jpeg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden mb-12">
      <div className="hidden absolute right-10 md:right-0 lg:right-7 top-80 lg:top-96 transform -translate-y-1/2 md:flex md:flex-col items-center text-center space-y-2 z-10">
        <div className="flex flex-col h-[45vh] md:space-y-7 lg:space-y-14">
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold z-10 text-darkblue text-center drop-shadow-custom">
            OXFORDSHIRE &<span className="block">BUCKINGHAMSHIRE</span>
          </h1>

          <h2 className="text-orange text-2xl md:text-2xl lg:text-4xl font-bold italic text-center drop-shadow-custom">
            We&apos;ve got you<span className="block">covered!</span>
          </h2>
          <div>
            <Link href="/contact">
              <button className="bg-lightblue text-white font-bold lg:p-6 px-3 py-4 rounded-sm drop-shadow-lg hover:bg-darkblue text-lg lg:text-xl">
                Submit an enquiry
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h2 className="text-orange text-3xl font-bold italic text-center drop-shadow-custom md:hidden absolute top-8 w-full left-1/2 transform -translate-x-1/2">
          We&apos;ve got you<span className="block">covered!</span>
        </h2>
        <div className="bottom-12 md:hidden absolute">
          <Link href="/contact">
            <button className="bg-lightblue text-white font-bold lg:p-6 px-3 py-3 rounded-sm drop-shadow-lg hover:bg-darkblue text-lg lg:text-xl">
              Submit an enquiry
            </button>
          </Link>
        </div>
      </div>

      <div>
        <div className="block md:hidden h-[475px] w-full overflow-hidden">
          <Image
            src={Mobile}
            alt="A man plastering - Mobile"
            objectPosition="center 30%"
            objectFit="cover"
            layout="fill"
            priority
            className="h-full rounded-sm"
          />
        </div>
        <div className="hidden md:flex lg:h-[700px] md:h-[500px]">
          <Image
            src={Desktop}
            alt="A man plastering - Desktop"
            layout="fill"
            objectFit="cover"
            priority
            className="md:w-full rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}
