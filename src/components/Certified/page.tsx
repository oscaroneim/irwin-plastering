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
      <div className="flex justify-center items-center gap-6">
        <div className="p-2">
          <Image
            src={sponserLogo4}
            alt="Gypsol logo"
            width={150}
            height={100}
          />
        </div>
        <div className="p-2">
          <Image
            src={sponserLogo1}
            alt="Cemfloor logo"
            width={150}
            height={100}
          />
        </div>

        <div className="p-2">
          <Image
            src={sponserLogo2}
            alt="Longfloor logo"
            width={150}
            height={100}
          />
        </div>
        <div className="p-2">
          <Image
            src={sponserLogo3}
            alt="Gyvlon logo"
            width={150}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
