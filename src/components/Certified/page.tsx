import Image from 'next/image';
import Link from 'next/link';
import SponsorLogo1 from '../../../public/images/WhyUs/sponser1.svg';
import SponsorLogo2 from '../../../public/images/WhyUs/sponser2.jpg';
import SponsorLogo3 from '../../../public/images/WhyUs/sponser3.png';
import SponsorLogo4 from '../../../public/images/WhyUs/sponser4.png';
import React from 'react';

export default function Certified() {
  return (
    <div className="text-center mt-14 lg:mt-20">
      <h1 className=" md:text-xl">Approved Installers and Trusted Partners of</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-2 sm:px-4">
        <div className="w-full h-24 sm:h-36 rounded-md flex items-center justify-center">
          <Link href="https://cemfloor.co.uk/">
            <SponsorLogo1 className="w-full h-full" />
          </Link>
        </div>
        <div className="w-full h-24 sm:h-36 rounded-md flex items-center justify-center">
          <Link href="https://www.longfloor.co.uk/">
            <Image
              src={SponsorLogo2}
              alt="LongFloor screed"
              width={252}
              height={145}
              layout="intrinsic"
            />
          </Link>
        </div>
        <div className="w-full h-24 sm:h-36 rounded-md flex items-center justify-center">
          <Link href="https://www.gyvlon.co.uk/en/">
            <Image
              src={SponsorLogo3}
              alt="Gyvlon Screed"
              width={252}
              height={145}
              layout="intrinsic"
            />
          </Link>
        </div>
        <div className="w-full h-24 sm:h-36 rounded-md flex items-center justify-center">
          <Link href="https://www.lkabminerals.com/news/lkab-minerals-acquires-francis-flower-2/">
            <Image src={SponsorLogo4} alt="Gypsol" width={252} height={145} layout="intrinsic" />
          </Link>
        </div>
      </div>
    </div>
  );
}
