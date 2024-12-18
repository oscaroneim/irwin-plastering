import Image from "next/image";
import whyUs from "../../../public/images/WhyUs/whyus.jpg";
import sponserLogo1 from "../../../public/images/WhyUs/sponser1.jpg";
import sponserLogo2 from "../../../public/images/WhyUs/sponser2.jpg";
import sponserLogo3 from "../../../public/images/WhyUs/sponser3.jpg";
import sponserLogo4 from "../../../public/images/WhyUs/sponser4.jpg";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="w-full h-auto mt-20 px-4">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[400px] px-4 md:px-10">
        <div className="flex flex-col justify-center lg:w-[60%]">
          <div className="text-center lg:text-left">
            <h1 className="text-darkblue font-semibold text-3xl md:text-5xl mb-3 lg:mb-4">
              WHY CHOOSE US?
            </h1>
            <div className="h-1 md:h-2 bg-orange mx-auto lg:mx-0 w-3/4 md:w-full max-w-[65%] mb-6"></div>
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              With extensive experience in floor screeding and spray rendering,
              we excel in complex and demanding site environments. Our
              collaborative approach, combined with the industry’s best tools
              and trusted materials, ensures the successful completion of your
              projects on time and to the highest standard.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We partner with leading main contractors, independent specialist
              builders, shopfitters, and self-builders. Using materials from
              suppliers such as Cemfloor and Gypsol, we deliver screeds and
              renders that offer optimal flatness, thermal performance, and
              durability, ensuring consistent results across residential and
              commercial projects.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              By focusing on meticulous planning and innovative techniques, we
              guarantee finishes that exceed expectations. Whether it’s screeds
              for underfloor heating or seamless spray renders, our team is
              dedicated to precision, quality, and lasting results.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex lg:items-center lg:w-[40%] lg:ml-4">
          <Image
            src={whyUs}
            alt="man buffing floor"
            width={600}
            height={600}
            className="object-cover w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 px-2 sm:px-4">
        <div className="w-full h-24 sm:h-36 rounded-md flex items-center justify-center">
          <Link href="https://cemfloor.co.uk/">
            <Image src={sponserLogo1} alt="Cemfloor" width={252} height={145} />
          </Link>
        </div>
        <div className="w-full h-24 sm:h-36 rounded-md flex items-center justify-center">
          <Link href="https://www.longfloor.co.uk/">
            <Image
              src={sponserLogo2}
              alt="Longfloor, Integrafloor"
              width={252}
              height={145}
            />
          </Link>
        </div>
        <div className="w-full h-24 sm:h-36 rounded-md flex items-center justify-center">
          <Link href="https://www.gyvlon.co.uk/en/">
            <Image
              src={sponserLogo3}
              alt="Gyvlon Screed"
              width={252}
              height={145}
            />
          </Link>
        </div>
        <div className="w-full h-24 sm:h-36 rounded-md flex items-center justify-center">
          <Link href="https://www.lkabminerals.com/news/lkab-minerals-acquires-francis-flower-2/">
            <Image src={sponserLogo4} alt="Gypsol" width={252} height={145} />
          </Link>
        </div>
      </div>
    </section>
  );
}
