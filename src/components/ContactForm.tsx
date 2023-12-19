import { useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

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
      <label className="block mb-2 text-sm font-bold text-gray-600">
        Tvoje ime ili nadimak
      </label>
      <input
        type="text"
        name="from_name"
        className="w-full p-2 border rounded-md"
        required
        minLength={2}
        maxLength={20}
      />
      <label className="block mt-4 mb-2 text-sm font-bold text-gray-600">
        Tvoj email
      </label>
      <input
        type="email"
        name="from_email"
        className="w-full p-2 border rounded-md"
        required
        minLength={6}
        maxLength={30}
      />
      <label className="block mt-4 mb-2 text-sm font-bold text-gray-600">
        Poruka
      </label>
      <textarea
        name="message"
        className="w-full p-2 border rounded-md"
        rows={6}
        required
        minLength={3}
        maxLength={350}
      ></textarea>
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
        className="mt-4 w-full bg-zelena text-white p-2 rounded-md hover:scale-105"
      >
        Pošalji
      </button>
    </form>
  );
};

export default ContactForm;
