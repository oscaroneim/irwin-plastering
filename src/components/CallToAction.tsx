import Image from "next/image";
import Map from "../../public/images/map.png";
import Button from "../components/Button/page";

export default function CallToAction() {
  return (
    <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center text-center space-y-4">
      <div>
        <Image
          src={Map}
          alt="Oxfordshire & Buckinghamshire"
          width={300}
          height={200}
          layout="responsive"
        />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold z-10 text-darkblue text-center drop-shadow-custom">
        OXFORDSHIRE &<span className="block">BUCKINGHAMSHIRE</span>
      </h1>
      <h2 className="text-orange text-xl md:text-3xl font-bold italic text-center drop-shadow-custom">
        We've got you<span className="block">covered!</span>
      </h2>
      <Button />
    </div>
  );
}
