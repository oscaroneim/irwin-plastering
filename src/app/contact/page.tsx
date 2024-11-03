import React from "react";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";

const ContactPage: React.FC = () => {
  const isMobile = false;

  return (
    <>
      <div className="text-center mt-20">
        <h1 className="md:text-6xl font-bold text-darkblue border-b-8 border-orange text-4xl md:w-[645px] mx-auto m-auto">
          CONTACT THE TEAM
        </h1>
      </div>
      <div className="container mx-auto p-4 mt-10">
        <p className="mb-4 text-lightblue font-bold font-montserrat text-4xl md:w-[800px]">
          Use this form to get advice from our experts or a quote for one of our
          services.
        </p>

        <div className="flex flex-col md:flex-row-reverse mt-14">
          <div className="w-full flex justify-evenly ">
            <Image
              src="/images/contact.png"
              alt="Commercial plastering img"
              width={600}
              height={400}
            />
          </div>
          <div className="w-full flex justify-between">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
