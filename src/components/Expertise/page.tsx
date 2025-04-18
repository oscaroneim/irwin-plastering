import React from 'react';
import Laser from '../../../public/images/lazer.jpg';
import Smooth from '../../../public/images/smooth.jpg';
import Machines from '../../../public/images/machine.jpg';
import JobDone from '../../../public/images/screedWall.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Expertise() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();

    if (pathname === '/contact') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Element with hash '${hash}' not found.`);
      }
    } else {
      router.push(`/contact${hash}`);
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };
  return (
    <div className="border-4 border-orange mt-8 rounded-sm p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col px-4 self-center lg:ml-2">
          <h2 className="mb-4 font-semibold text-4xl lg:text-5xl text-lightblue">
            At Irwin, we handle all aspects of plastering.
          </h2>
          <p className="mb-4 md:text-lg mt-2 text-lg">
            We understand that every project comes with its own set of challenges, which is why we
            pride ourselves on delivering tailored solutions. From intricate architectural detailing
            to large-scale commercial projects, our skilled team adapts to your requirements,
            ensuring precision at every stage.
          </p>
          <p className="mb-4 md:text-lg text-lg">
            We use cutting-edge techniques and premium materials to enhance thermal insulation,
            acoustic performance, and overall longevity, giving you results that stand the test of
            time.
          </p>

          <ul className="grid-cols-1 text-xl lg:text-2xl my-4 lg:my-8 grid md:grid-cols-2 gap-x-4 gap-y-2">
            <li className="text-darkblue font-semibold italic">• Plastering</li>
            <li className="text-darkblue font-semibold italic">• K Rend</li>
            <li className="text-darkblue font-semibold italic">• Coloured Renders</li>
            <li className="text-darkblue font-semibold italic">• Liquid Screed</li>
            <li className="text-darkblue font-semibold italic">• Repairs</li>
            <li className="text-darkblue font-semibold italic">• Venetian Plaster</li>
            <li className="text-darkblue font-semibold italic">• Restoration</li>
            <li className="text-darkblue font-semibold italic">• Fireproofing</li>
            <li className="text-darkblue font-semibold italic">• Acoustic Plastering</li>
            <li className="text-darkblue font-semibold italic">• Pebble Dashing</li>
          </ul>
          <Link href="/contact#AllServices" onClick={(e) => handleNavigation(e, '#AllServices')}>
            <p className="text-darkblue font-semibold text-xs italic underline my-2">
              And many other tailored solutions to meet your needs
            </p>
          </Link>
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
