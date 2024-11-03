import Link from "next/link";

export default function Success() {
  return (
    <div className="text-center my-20">
      <h1 className="md:text-6xl font-bold text-orange text-4xl md:w-[645px] mx-auto m-auto">
        Your enquiry has been received!
      </h1>
      <h2 className="text-lightblue font-bold font-montserrat text-3xl md:w-[800px] mx-auto mt-10">
        What happens next?
      </h2>
      <p className="mt-10 font-montserrat text-xl md:text-3xl md:w-[800px] mx-auto">
        The team will be in touch shortly via the provided phone number or email
        address, so keep a look out. If you have any issues please don’t
        hesitate to get in touch on
      </p>
      <p
        className="
        text-orange font-bold mt-4 text-xl md:text-3xl"
      >
        07746882369
      </p>
      <p className="mt-16">
        <Link href={"/"} className=" font-bold underline">
          Go back to the homepage
        </Link>
      </p>
    </div>
  );
}
