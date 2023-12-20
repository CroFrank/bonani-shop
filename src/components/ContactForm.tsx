import { useRef, type FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";

const ContactForm = ({
  service,
  template,
  id,
}: {
  service: string;
  template: string;
  id: string;
}) => {
  const [isSubmiting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (form.current) {
        // await emailjs.sendForm(service, template, form.current, id);
        console.log(form.current);
        form.current!.reset();
        setOpen(true);
      } else {
        console.log("Form reference is not available.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
          <Textarea
            label="Poruka *"
            name="message"
            rows={6}
            required
            minLength={3}
            maxLength={350}
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
          {isSubmiting ? "...Šaljem" : "Pošalji"}
        </button>
      </form>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <DialogHeader>Poruka uspješno poslana</DialogHeader>
        <DialogBody>
          Hvala na Vašem interesu. Pokušat ćemo odgovoriti u najkraćem mogućem
          vremenu.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpen(false)}
            className="mr-1"
          >
            <span>Zatvori</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ContactForm;
