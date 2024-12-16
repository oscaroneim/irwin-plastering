import Image from "next/image";
import Button from "../Button/page";
import Comm from "/public/images/comm.png";
import Home from "/public/images/home.png";
import Private from "/public/images/priv.png";

export default function Services() {
  return (
    <section className="w-full h-auto mt-12 px-4">
      <div className="text-center">
        <h1 className="mb-2 text-darkblue font-semibold text-4xl lg:text-5xl">
          OUR SERVICES ENCOMPASS
        </h1>
        <div className="h-1 md:h-2 bg-orange mx-auto mt-2 w-full max-w-[80%] lg:max-w-[50%] mb-12"></div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 justify-between items-stretch w-auto">
        <div className="mb-8 md:mb-0 flex flex-col w-full md:w-[452px]">
          <h2 className="mb-4 font-semibold text-2xl">
            COMMERCIAL <span className="hidden lg:inline-block">SITES</span>
          </h2>
          <Image
            src={Comm}
            alt="Commercial Sites"
            width={452}
            height={208}
            className="mb-4 rounded-md object-cover w-full"
          />
          <p className="mb-4 flex-grow">
            Irwin Plastering provides durable screeding solutions ideal for
            warehouses, offices, and retail spaces. Our expert services ensure
            smooth, long-lasting floors for high-traffic areas and seamless
            interiors with professional plastering finishes.
          </p>
          <Button type="COMMERCIAL PROPERTY" />
        </div>

        <div className="mb-8 md:mb-0 flex flex-col w-full md:w-[452px]">
          <h2 className="mb-4 font-semibold text-2xl">PRIVATE HOUSE</h2>
          <Image
            src={Private}
            alt="Private House"
            width={452}
            height={208}
            className="mb-4 rounded-md object-cover w-full"
          />
          <p className="mb-4 flex-grow">
            Transforming private homes with flawless plastering and screeding,
            we ensure smooth finishes and energy-efficient floors. Irwin
            Plastering brings precision and care to every home improvement or
            new build project.
          </p>
          <Button type="PRIVATE HOUSE" />
        </div>

        <div className="flex flex-col w-full md:w-[452px]">
          <h2 className="mb-4 font-semibold text-2xl">HOME OWNER</h2>
          <Image
            src={Home}
            alt="Home Owner"
            width={452}
            height={208}
            className="mb-4 rounded-md object-cover w-full"
          />
          <p className="mb-4 flex-grow">
            For homeowners, we provide high-quality plastering and screeding to
            enhance comfort and aesthetics. Our tailored services deliver
            stylish walls, durable floors, and finishes designed to last.
          </p>
          <Button type="HOME OWNER" />
        </div>
      </div>
    </section>
  );
}
