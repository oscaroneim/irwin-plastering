import Laser from "../../../public/images/lazer.jpg";
import Smooth from "../../../public/images/smooth.jpg";
import Machines from "../../../public/images/machine.jpg";
import JobDone from "../../../public/images/screedWall.jpg";
import Image from "next/image";

export default function Expertise() {
  return (
    <div className="border-4 border-orange mt-8 rounded-md p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col px-4 self-center lg:ml-2">
          <h2 className="mb-4 font-semibold text-4xl lg:text-5xl text-lightblue">
            At Irwin, we handle all aspects of plastering.
          </h2>
          <p className="mb-4 text-xl mt-2">
            We understand that every project comes with its own set of
            challenges, which is why we pride ourselves on delivering tailored
            solutions. From intricate architectural detailing to large-scale
            commercial projects, our skilled team adapts to your requirements,
            ensuring precision at every stage.
          </p>
          <p className="mb-4 text-xl">
            We use cutting-edge techniques and premium materials to enhance
            thermal insulation, acoustic performance, and overall longevity,
            giving you results that stand the test of time.
          </p>

          <ul className="text-xl lg:text-3xl space-y-1 sm:space-y-2 md:space-y-1 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-1 sm:gap-y-2 md:gap-y-1 gap-x-4">
            <li className="text-darkblue font-semibold italic">• Plastering</li>
            <li className="text-darkblue font-semibold italic">• K Rend</li>
            <li className="text-darkblue font-semibold italic">
              • Coloured Renders
            </li>
            <li className="text-darkblue font-semibold italic">
              • Liquid Screed
            </li>
            <li className="text-darkblue font-semibold italic">• Renderins</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <div className="w-full h-[150px] sm:h-[200px] md:h-[350px] rounded-sm overflow-hidden">
            <Image
              src={Laser}
              alt="Laser measuring the floor"
              width={350}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-[150px] sm:h-[200px] md:h-[350px] rounded-sm overflow-hidden">
            <Image
              src={Smooth}
              alt="Smoothing over a wall"
              width={350}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-[150px] sm:h-[200px] md:h-[350px] rounded-sm overflow-hidden">
            <Image
              src={Machines}
              alt="Equipment we use"
              width={350}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-[150px] sm:h-[200px] md:h-[350px] rounded-sm overflow-hidden">
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
  );
}
