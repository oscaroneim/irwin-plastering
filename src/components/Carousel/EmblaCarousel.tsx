import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Slide1 from "../../../public/images/hero1.png";
import Slide1Mobile from "../../../public/images/Slide1Mobile.jpg";
import Image from "next/image";
import HeroBanner from "./HeroBanner";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="overflow-hidden mb-12" ref={emblaRef}>
      <div className="flex h-[650px]">
        <div className="flex-none w-full min-w-0 relative">
          <HeroBanner />
          {/* Mobile Image */}
          <div className="block md:hidden">
            <Image
              src={Slide1Mobile}
              alt="A man plastering - Mobile"
              layout="responsive"
              priority
            />
          </div>
          {/* Desktop Image */}
          <div className="hidden md:block">
            <Image
              src={Slide1}
              alt="A man plastering - Desktop"
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
