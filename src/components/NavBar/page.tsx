import Logo from "/public/images/svg/irwin-plastering-logo.svg";
import Logo2 from "/public/images/svg/logobullet.svg";
import Button from "../Button/page";
import Link from "next/link";
import Phone from "/public/images/svg/phone.svg";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="w-1/2 h-auto">
        {/* Mobile Logo - Hidden on md and larger screens */}
        <Link href="/">
          <Logo className="w-[188px] h-[80px] pt-2 md:hidden" />
        </Link>
        {/* Desktop Logo - Hidden on mobile screens */}
        <Link href="/">
          <Logo2 className="w-full h-auto hidden md:block pt-2" />
        </Link>
      </div>
      <div className="md:hidden pr-2">
        <Button />
      </div>
      <div className="md:flex text-xl md:items-center md:justify-between font-bold md:gap-4 hidden pr-4">
        <p className="text-darkblue text-nowrap">Contact Us</p>
        <Phone className="w-6 h-6" />
        <p className="text-orange">07746882369</p>
      </div>
    </nav>
  );
}
