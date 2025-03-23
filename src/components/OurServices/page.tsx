import Image from 'next/image';
import Button from '../Button/page';
import Comm from '../../../public/images/office.avif';
import Home from '../../../public/images/home.jpg';
import Private from '../../../public/images/private.jpg';
import React from 'react';

export default function OurServices() {
  return (
    <section className="w-full h-auto mt-12 lg:mt-14">
      <div className="text-center">
        <div className="inline-block relative mb-8">
          <h1 className="mb-2 text-darkblue font-semibold text-4xl lg:text-5xl">OUR SERVICES</h1>
          <div className="h-1 md:h-2 bg-orange mx-auto mt-2 w-full lg:mb-10"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-4 justify-between xl:justify-evenly items-stretch w-auto">
        <div className="mb-8 md:mb-0 flex flex-col w-full md:w-[452px] lg:mb-10">
          <h2 className="mb-4 font-semibold text-2xl">
            COMMERCIAL <span className="hidden lg:inline-block">SITES</span>
          </h2>
          <Image
            src={Comm}
            alt="Commercial Sites"
            width={452}
            height={200}
            className="mb-4 rounded-sm object-cover w-full"
          />
          <p className="mb-4 flex-grow">
            Irwin Plastering provides durable screeding solutions ideal for warehouses, offices, and
            retail spaces. Our expert services ensure smooth, long-lasting floors for high-traffic
            areas and seamless interiors with professional plastering finishes.
          </p>
          <Button type="COMMERCIAL PROPERTY">Enquire</Button>
        </div>

        <div className="mb-8 md:mb-0 flex flex-col w-full md:w-[452px] lg:mb-10">
          <h2 className="mb-4 font-semibold text-2xl">PRIVATE HOUSE</h2>
          <Image
            src={Private}
            alt="Private House"
            width={452}
            height={200}
            className="mb-4 rounded-sm object-cover w-full"
          />
          <p className="mb-4 flex-grow">
            Transforming private homes with flawless plastering and screeding, we ensure smooth
            finishes and energy-efficient floors. Irwin Plastering brings precision and care to
            every home improvement or new build project.
          </p>
          <Button type="PRIVATE HOUSE">Enquire</Button>
        </div>

        <div className="flex flex-col w-full md:w-[452px] lg:mb-10">
          <h2 className="mb-4 font-semibold text-2xl">HOME OWNER</h2>
          <Image
            src={Home}
            alt="Home Owner"
            width={452}
            height={200}
            className="mb-4 rounded-sm object-cover w-full"
          />
          <p className="mb-4 flex-grow">
            For homeowners, we offer top-quality plastering and screeding services at fair prices,
            enhancing both comfort and aesthetics. Our personalized approach ensures stylish walls,
            durable floors, and long-lasting finishes tailored to your needs.
          </p>
          <Button type="HOME OWNER" className="mb-10 md:mb-0">
            Enquire
          </Button>
        </div>
      </div>
    </section>
  );
}
