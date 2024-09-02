import Link from "../../../node_modules/next/link";

const Button = () => {
  return (
    <Link href="/contact-page">
      <button className="p-3 text-nowrap text-white bg-orange rounded-md md:hidden">
        Get a quote
      </button>
    </Link>
  );
};

export default Button;
