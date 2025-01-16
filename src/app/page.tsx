"use client";

import OurServices from "@/components/OurServices/page";
import HeroSection from "@/components/Hero/HeroSection";
import Expertise from "@/components/Expertise/page";
import WhyUs from "@/components/WhyUs/WhyUs";
import SEO from "@/utils/Seo";

export default function Home() {
  return (
    <>
      <SEO
        title="Irwin Plastering - Professional Plastering Services"
        description="Expert plastering services in Oxfordshire and Buckinghamshire. Contact us today for skimming, repairs, and renovations tailored to your needs."
        url="https://irwinplastering.com"
        image="https://irwinplastering.com/images/plastering-banner.jpg"
        type="website"
        siteName="Irwin Plastering"
      />
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
    </>
  );
}
