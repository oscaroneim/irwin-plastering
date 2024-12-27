import Image from "next/legacy/image";
import SponsorLogo1 from "../../../public/images/WhyUs/sponser1.svg";
import SponsorLogo2 from "../../../public/images/WhyUs/sponser2.jpg";
import SponsorLogo3 from "../../../public/images/WhyUs/sponser3.png";
import SponsorLogo4 from "../../../public/images/WhyUs/sponser4.png";

export default function Certified() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-md md:text-xl mb-4">
        Approved Installers and Trusted Partners of
      </h1>
      <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center md:items-center gap-6">
        <div className="p-4 flex justify-center">
          <Image
            src={SponsorLogo4}
            alt="Gypsol logo"
            className="w-full h-auto max-w-[200px] object-contain"
          />
        </div>
        <div className="p-4 flex justify-center">
          <SponsorLogo1 className="w-full h-full" />
        </div>
        <div className="p-4 flex justify-center">
          <Image
            src={SponsorLogo2}
            alt="Longfloor logo"
            className="w-full h-auto max-w-[200px] object-contain"
          />
        </div>
        <div className="p-4 flex justify-center">
          <Image
            src={SponsorLogo3}
            alt="Gyvlon logo"
            className="w-full h-auto max-w-[200px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
