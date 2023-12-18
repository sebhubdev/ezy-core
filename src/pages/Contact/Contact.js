import React from "react";
import ContactForm from "components/organisms/ContactForm";
import SlicesZone from "modules/Prismic/SlicesZone";

const Contact = ({ data }) => {
  const { slices, type } = data;
  return (
    <div className={`page ${type}-page small-content`}>
      <h1>Formulaire de contact</h1>
      <ContactForm />
      {slices && <SlicesZone slices={slices} />}
    </div>
  );
};

export default Contact;
