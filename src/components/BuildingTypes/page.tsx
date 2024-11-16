import Image from "next/image";
import Button from "../Button/page";
import Comm from "/public/images/comm.png";
import Home from "/public/images/home.png";
import Private from "/public/images/priv.png";

export default function Services() {
  return (
    <section className="w-full h-auto mt-20">
      <h1 className="mb-8 text-darkblue font-semibold text-5xl">
        OUR SERVICES ENCOMPASS
      </h1>
      <div className="border-b-4 lg:border-b-8 border-orange w-full mb-8"></div>
      <div className="flex flex-col md:flex-row justify-between w-auto">
        <div>
          <h2 className="mb-4 font-semibold text-2xl">COMMERCIAL SITES</h2>
          <Image
            src={Comm}
            alt="Commercial Sites"
            width={452}
            height={208}
            className="mb-4"
          />
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet, consectetur porta, lectus sed. Qsit amet, consectetur
            adipiscing elit.
          </p>
          <Button type="commercial" />
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-2xl">PRIVATE HOUSE</h2>
          <Image
            src={Private}
            alt="Private House"
            width={452}
            height={208}
            className="mb-4"
          />
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet, consectetur porta, lectus sed. Qsit amet, consectetur
            adipiscing elit.
          </p>
          <Button type="private" />
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-2xl">HOME OWNER</h2>
          <Image
            src={Home}
            alt="Home Owner"
            width={452}
            height={208}
            className="mb-4"
          />
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet, consectetur porta, lectus sed. Qsit amet, consectetur
            adipiscing elit.
          </p>
          <Button type="homeowner" />
        </div>
      </div>
      <div className="border-4 border-orange w-full mt-8 h-auto rounded-md ">
        <div className="w-[30%] mx-10 my-12">
          <h2 className="mb-4 font-semibold text-4xl text-lightblue">
            At Irwin, we handle all aspects of plastering
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet, consectetur porta, lectus sed. Qsit amet, consectetur
            adipiscing elit.
          </p>
          <ul className="text-xl">
            <li className="text-darkblue font-semibold italic">• Plastering</li>
            <li className="text-darkblue font-semibold italic">• K Rend</li>
            <li className="text-darkblue font-semibold italic">
              • Coloured Renders{" "}
            </li>
            <li className="text-darkblue font-semibold italic">
              • Liquid Screed
            </li>
            <li className="text-darkblue font-semibold italic">• Renderins</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
