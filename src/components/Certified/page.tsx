import Link from "next/link";
import Image from "next/image";
import sponserLogo1 from "../../../public/images/WhyUs/sponser1.jpg";
import sponserLogo2 from "../../../public/images/WhyUs/sponser2.jpg";
import sponserLogo3 from "../../../public/images/WhyUs/sponser3.jpg";
import sponserLogo4 from "../../../public/images/WhyUs/sponser4.jpg";

export default function Certified() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-md md:text-xl mb-4">
        Approved Installers and Trusted Partners of Leading Screed Brands
      </h1>
      <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center md:items-center gap-6">
        <div className="p-4 flex justify-center">
          <Image
            src={sponserLogo4}
            alt="Gypsol logo"
            className="w-full h-auto max-w-[200px] object-contain"
          />
        </div>
        <div className="p-4 flex justify-center">
          <Image
            src={sponserLogo1}
            alt="Cemfloor logo"
            className="w-full h-auto max-w-[200px] object-contain"
          />
        </div>
        <div className="p-4 flex justify-center">
          <Image
            src={sponserLogo2}
            alt="Longfloor logo"
            className="w-full h-auto max-w-[200px] object-contain"
          />
        </div>
        <div className="p-4 flex justify-center">
          <Image
            src={sponserLogo3}
            alt="Gyvlon logo"
            className="w-full h-auto max-w-[200px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
