import Image from "next/image";
import Button from "../Button/page";
import Comm from "/public/images/comm.png";
import Home from "/public/images/home.png";
import Private from "/public/images/priv.png";
import Pour from "../../../public/images/service1.png";
import Smooth from "../../../public/images/service2.png";
import Machines from "../../../public/images/service3.png";
import JobDone from "../../../public/images/service4.png";

export default function Services() {
  return (
    <section className="w-full h-auto mt-12 px-4">
      <h1 className="mb-2 text-darkblue font-semibold text-4xl lg:text-5xl text-center md:text-left">
        OUR SERVICES ENCOMPASS
      </h1>
      <div className="border-b-4 md:border-b-8 border-orange md:w-[80%] lg:w-[50%] mb-8"></div>
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
          <Button type="commercial" />
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
          <Button type="private" />
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
          <Button type="homeowner" />
        </div>
      </div>
      <div className="border-4 border-orange mt-8 rounded-md p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="flex flex-col px-4 self-center lg:ml-2">
            <h2 className="mb-4 font-semibold text-4xl lg:text-5xl text-lightblue">
              At Irwin, we handle all aspects of plastering
            </h2>
            <p className="mb-4 text-xl mt-2">
              At Irwin, we understand that every project comes with its own set
              of challenges, which is why we pride ourselves on delivering
              tailored solutions. From intricate architectural detailing to
              large-scale commercial projects, our skilled team adapts to your
              requirements, ensuring precision at every stage.
            </p>
            <p className="mb-4 text-xl">
              We use cutting-edge techniques and premium materials to enhance
              thermal insulation, acoustic performance, and overall longevity,
              giving you results that stand the test of time.
            </p>

            <ul className="text-3xl space-y-2 lg:mt-2 grid grid-cols-2 lg:grid-cols-1 gap-x-4">
              <li className="text-darkblue font-semibold italic">
                • Plastering
              </li>
              <li className="text-darkblue font-semibold italic">• K Rend</li>
              <li className="text-darkblue font-semibold italic">
                • Coloured Renders
              </li>
              <li className="text-darkblue font-semibold italic">
                • Liquid Screed
              </li>
              <li className="text-darkblue font-semibold italic">
                • Renderins
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[350px] rounded-md overflow-hidden">
              <Image
                src={Pour}
                alt="Pouring screed"
                width={350}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-[150px] sm:h-[200px] md:h-[350px] rounded-md overflow-hidden">
              <Image
                src={Smooth}
                alt="Smoothing over a wall"
                width={350}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-[150px] sm:h-[200px] md:h-[350px] rounded-md overflow-hidden">
              <Image
                src={Machines}
                alt="Equipment we use"
                width={350}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-[150px] sm:h-[200px] md:h-[350px] rounded-md overflow-hidden">
              <Image
                src={JobDone}
                alt="A finished wall"
                width={350}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
