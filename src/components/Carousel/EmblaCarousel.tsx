import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Slide1 from "../../../public/images/hero1.png";
import Image from "next/image";
import HeroBanner from "./HeroBanner";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-none w-full min-w-0">
          <HeroBanner />
          <Image
            src={Slide1}
            alt="A man plastering"
            layout="responsive"
            className="rounded-md"
          />
        </div>
        <div className="flex-none w-full min-w-0 ">Slide 2</div>
        <div className="flex-none w-full min-w-0">Slide 3</div>
      </div>
    </div>
  );
}
