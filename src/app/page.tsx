"use client";

import Services from "@/components/BuildingTypes/page";
import { EmblaCarousel } from "@/components/Carousel/EmblaCarousel";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {
  return (
    <main>
      <section className="mx-[18px]">
        <EmblaCarousel />
      </section>
      <section>
        <div>
          <Services />
        </div>
      </section>
      <section>
        <div>
          <WhyUs />
        </div>
      </section>
    </main>
  );
}
