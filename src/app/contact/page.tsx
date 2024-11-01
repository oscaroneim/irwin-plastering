import React from "react";
import ContactForm from "../../components/ContactForm";
import { Montserrat } from "next/font/google";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="text-center mt-20">
        <h1 className="text-6xl font-bold text-darkblue border-b-8 border-orange w-[645px] mx-auto m-auto">
          CONTACT THE TEAM
        </h1>
      </div>
      <div className="container mx-auto p-4 mt-10">
        <p className="mb-4 text-lightblue font-bold font-montserrat text-4xl w-[800px]">
          Use this form to get advice from our experts or a quote for one of our
          services.
        </p>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
