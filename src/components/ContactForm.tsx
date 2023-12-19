import { useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@material-tailwind/react";

const ContactForm = ({
  service,
  template,
  id,
}: {
  service: string;
  template: string;
  id: string;
}) => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(service, template, form.current, id).then(
        () => {
          form.current!.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
    } else {
      console.log("error");
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-md mx-auto mt-8 bg-white p-8 border rounded-md shadow-md"
    >
      <div className="mb-10">
        <Input
          label="Tvoje ime ili nadimak"
          name="from_name"
          required
          minLength={2}
          maxLength={20}
          type="text"
          crossOrigin="anonymous"
        />
      </div>
      <div className="mb-10">
        <Input
          label="Tvoj email"
          type="email"
          name="from_email"
          required
          minLength={6}
          maxLength={30}
          crossOrigin="anonymous"
        />
      </div>
      <div className="mb-8">
        <Input
          label="Poruka"
          name="message"
          className="w-full p-2 border rounded-md"
          containerProps={{ className: "min-h-[100px]" }}
          required
          minLength={3}
          maxLength={350}
          crossOrigin="anonymous"
        />
      </div>
      <label className="text-sm">
        <input
          type="checkbox"
          id="privacyCheckbox"
          name="privacyCheckbox"
          required
        />{" "}
        Suglasni ste da se vaši podaci obrađuju u skladu sa našom{" "}
        <a href="/privacy" className="text-blue-700">
          Politikom privatnosti
        </a>
      </label>
      <button
        type="submit"
        className="mt-8 w-full bg-roza3 text-white p-2 rounded-md hover:scale-105"
      >
        Pošalji
      </button>
    </form>
  );
};

export default ContactForm;
