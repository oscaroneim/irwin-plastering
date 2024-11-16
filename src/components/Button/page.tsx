import Link from "../../../node_modules/next/link";
import clsx from "clsx";

type ButtonProp = {
  className?: string;
  type?: "commercial" | "private" | "homeowner";
};

const Button = ({ className, type }: ButtonProp) => {
  return (
    <Link href={`/contact?type=${type}`}>
      <button
        className={clsx(
          "w-auto h-auto bg-lightblue text-white font-bold px-4 py-4 md:px-8 md:py-4 rounded-md hover:bg-darkblue drop-shadow-lg",
          className,
        )}
      >
        Get a quote
      </button>
    </Link>
  );
};

export default Button;
