"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import CallToAction from "./CallToAction";

// Import your images
import hero1 from "../../public/images/hero1.png";

// Dynamically import Swiper components without SSR
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false },
);

const Carousel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensures that the Swiper component only renders on the client
    setIsMounted(true);
  }, []);

  const slides = [
    { id: 1, image: hero1, title: "Hero 1" },
    // { id: 2, image: hero2, title: 'Hero 2' },
    // { id: 3, image: hero3, title: 'Hero 3' },
  ];

  if (!isMounted) return null; // Prevents Swiper from rendering server-side

  return (
    <div className="w-full mx-auto mb-8">
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        keyboard
        className="h-full" // Set height explicitly on Swiper
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="relative w-full h-full flex justify-center items-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="responsive"
                width={1280}
                height={720}
                className="object-cover rounded-lg" // Tailwind classes here
              />
              <CallToAction />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
