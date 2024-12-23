import React from "react";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Certified from "../../components/Certified/page";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="text-center md:mt-2">
        <h1 className="md:text-6xl font-bold text-darkblue text-4xl">
          CONTACT US
        </h1>
        <div className="h-1 md:h-2 bg-orange mx-auto mt-2 w-full max-w-[70%] lg:md:max-w-[30%] md:max-w-[55%] mb-12"></div>
      </div>
      <div className="container mx-auto p-4 mt-10">
        <p className="mb-4 text-lightblue font-bold font-montserrat text-2xl md:text-3xl lg:text-4xl text-left lg:w-full md:mx-8">
          Use this form to get advice from our experts or a quote for one of our
          services.
        </p>

        <div className="flex flex-col md:flex-row-reverse mt-14">
          <div className="lg:w-full lg:flex lg:justify-evenly hidden">
            <Image
              src="/images/contact.png"
              alt="Commercial plastering img"
              width={600}
              height={400}
            />
          </div>
          <div className="w-full flex justify-center p-0">
            <ContactForm />
          </div>
        </div>
        <div>
          <Certified />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
