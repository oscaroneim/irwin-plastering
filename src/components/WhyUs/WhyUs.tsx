import Image from "next/image";
import whyUs from "../../../public/images/pour.jpeg";
import Certified from "../Certified/page";
import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="w-full h-auto mt-20">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[400px] px-4 md:px-5">
        <div className="flex flex-col justify-center lg:w-[60%]">
          <div className="text-center lg:text-left">
            <div className="inline-block">
              <h1 className="text-darkblue font-semibold text-3xl md:text-5xl mb-2 md:mb-3 lg:mb-2">
                WHY CHOOSE US?
              </h1>
              <div className="h-1 md:h-2 bg-orange mx-auto lg:mx-0  md:w-full mb-6"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              With extensive experience in floor screeding and spray rendering,
              we excel in complex and demanding site environments. Our
              collaborative approach, combined with the industry’s best tools
              and trusted materials, ensures the successful completion of your
              projects on time and to the highest standard.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We partner with leading main contractors, independent specialist
              builders, shopfitters, and DIY enthusiasts. Using materials from
              suppliers such as Cemfloor and Gypsol, we deliver screeds and
              renders that offer optimal flatness, thermal performance, and
              durability, ensuring consistent results across all projects,
              regardless of scale.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              By focusing on meticulous planning and innovative techniques, we
              guarantee finishes that exceed expectations. Whether it’s screeds
              for underfloor heating or seamless spray renders, our team is
              dedicated to precision, quality, and lasting results.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex lg:items-center lg:w-[40%] lg:ml-4">
          <Image
            src={whyUs}
            alt="man pouring screed"
            width={600}
            height={700}
            className="object-cover w-full h-full rounded-sm"
          />
        </div>
      </div>
      <Certified />
    </section>
  );
}
