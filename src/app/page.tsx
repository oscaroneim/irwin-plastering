"use client";

import Services from "@/components/BuildingTypes/page";
import { EmblaCarousel } from "@/components/Carousel/EmblaCarousel";
import Expertise from "@/components/Expertise/page";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {
  return (
    <main>
      <section>
        <EmblaCarousel />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      <section id="whyUs">
        <WhyUs />
      </section>
    </main>
  );
}
