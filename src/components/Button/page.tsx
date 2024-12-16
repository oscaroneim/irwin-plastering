import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useSelection } from "@/utils/SelectionContext";

type ButtonProp = {
  className?: string;
  type: "HOME OWNER" | "PRIVATE HOUSE" | "COMMERCIAL PROPERTY" | "";
};

const Button = ({ className, type }: ButtonProp) => {
  const { setSelected } = useSelection();
  const router = useRouter();

  const handleButtonClick = () => {
    setSelected(type || "");
    router.push("/contact");
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // Prevent default if needed
        handleButtonClick();
      }}
      className={clsx(
        "w-auto h-auto bg-lightblue text-white font-bold px-4 py-4 md:px-8 md:py-4 rounded-md hover:bg-darkblue drop-shadow-lg",
        className,
      )}
    >
      Get a quote
    </button>
  );
};

export default Button;
