import Logo from "/public/images/svg/irwin-plastering-logo.svg";
import Logo2 from "/public/images/svg/logobullet.svg";
import Button from "../Button/page";
import Link from "next/link";
import Phone from "/public/images/svg/phone.svg";
import "./page.css";
// import Hand from "../../../public/images/svg/handLogo.svg"; hand logo to be animated on page load

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between mb-8">
      <div className="w-1/2 h-auto">
        <Link href="/">
          <Logo className="w-[188px] h-[80px] pt-2 md:hidden" />
        </Link>

        <Link href="/">
          <Logo2 className="w-full h-auto hidden md:block pt-2" />
        </Link>
        <div className="border-top-custom-head absolute top-[60px] md:top-[102px] mx-auto w-[78%] md:w-[92.5%] md:left-24"></div>
      </div>
      <div className="md:hidden pr-2">
        <Button />
      </div>
      <div className="md:flex text-xl md:items-center md:justify-between font-bold md:gap-4 hidden pr-4">
        <p className="text-white text-nowrap md:h-auto md:w-auto md:bg-lightblue md:py-1 md:px-2 md:rounded-md">
          <Link href={"/contact"}>Contact Us</Link>
        </p>
        <Phone className="w-5 h-6" />
        <p className="text-orange">07746882369</p>
      </div>
    </nav>
  );
}
