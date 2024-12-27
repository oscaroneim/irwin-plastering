"use client";

import OurServices from "@/components/OurServices/page";
import HeroSection from "@/components/Hero/HeroSection";
import Expertise from "@/components/Expertise/page";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {
  return (
    <main>
      <section>
        <HeroSection />
      </section>
      <section id="services">
        <OurServices />
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
