import React from "react";
import ContactForm from "../../components/ContactForm"; // Adjust the path as necessary

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="mb-4">
        Please fill out the form below to get in touch with us.
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
