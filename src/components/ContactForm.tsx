import { type FormEvent, useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

import FormInput from "./form/FormInput";
import Textarea from "./form/Textarea";
import Checkbox from "./form/Checkbox";
import Modal from "./Modal";

const FORMSPARK_FORM_ID = "Khr6vmn2q";

const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("example@gmail.com");
  const [message, setMessage] = useState("Zanimaju me topperi.");
  const [agreed, setAgreed] = useState(false);

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
  formData.append("agreed", agreed.toString());

  const [isSubmiting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(false);
  const requiredFields = ["name", "email", "message", "agreed"];
  const allFieldsPresent = requiredFields.every((field) => formData.has(field));
  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (allFieldsPresent) {
        await submit({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          agreed: formData.get("agreed"),
        });
        setName("");
        setEmail("");
        setMessage("");
        setAgreed(false);
      } else {
        console.log("Form reference is not available.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
      setOpen(true);
    }
  };
  return (
    <>
      <form
        onSubmit={sendEmail}
        className="max-w-md mt-8 bg-white p-8 rounded-md shadow-md md:mr-10"
      >
        <FormInput
          type="text"
          text="Ime"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <FormInput
          type="email"
          text="Vaš email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Textarea
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
        />
        <Checkbox
          checked={agreed}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAgreed(e.target.checked)
          }
        />

        <button
          disabled={submitting}
          type="submit"
          className="mt-8 w-full bg-roza3 text-white p-2 rounded-md hover:scale-105"
        >
          {isSubmiting ? "...Šaljem" : "Pošalji"}
        </button>
      </form>
      <Modal isOpen={open} function={handleOpen} />
    </>
  );
};

export default ContactForm;
