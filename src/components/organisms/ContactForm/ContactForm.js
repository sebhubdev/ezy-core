import React from "react";
import { InputText } from "components/atoms/Form/Input";
import AlertMsg from "components/atoms/AlertMsg/AlertMsg";
import contactDataService from "dataServices/Contact";

const ContactForm = () => {
  const formRef = React.useRef(null);
  const [alertMessage, setAlertMessage] = React.useState(null);
  const [alertAppareance, setAlertAppareance] = React.useState(null);
  const [sending, setSending] = React.useState(false);

  const sendContact = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);

    console.log(data);
    setSending(true);
    contactDataService
      .sendContact(data)
      .then((res) => {
        setAlertMessage("Votre message a été envoyé avec succès. :)");
        setAlertAppareance("success");
        form.reset();
        setSending(false);
      })
      .catch((err) => {
        setAlertMessage("Une erreur s'est produite lors de l'envoi. :(");
        setAlertAppareance("danger");
        setSending(false);
      });
  };
  return (
    <div className="contact-form">
      {alertMessage && (
        <AlertMsg message={alertMessage} appareance={alertAppareance} />
      )}
      <form ref={formRef}>
        <InputText name="name" placeholder="Nom Prénom *" />
        <InputText name="phone" placeholder="N° de téléphone (recommandé)" />
        <InputText name="email" placeholder="Email *" />
        <InputText name="subject" placeholder="Objet" />
        <textarea
          className="input-text textarea required"
          name="message"
          placeholder="Message"
        ></textarea>
        <button className="btn btn-primary" onClick={sendContact}>
          ENVOYER
        </button>
      </form>

      {sending && "Envoi en cours..."}
    </div>
  );
};

export default ContactForm;
