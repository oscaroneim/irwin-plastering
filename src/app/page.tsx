"use client";

import Services from "@/components/BuildingTypes/page";
import { EmblaCarousel } from "@/components/Carousel/EmblaCarousel";

export default function Home() {
  return (
    <main>
      <section>
        <EmblaCarousel />
      </section>
      <section>
        <div>
          <Services />
        </div>
      </section>
      <section>
        <div className="h-[600px] w-full bg-lightblue mt-8"></div>
      </section>
    </main>
  );
}
