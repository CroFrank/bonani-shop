import { Partner } from "./Partner";

const Partners = () => {
  return (
    <section className="bg-roza2 mb-16 flex flex-col items-center">
      <h2 className="text-4xl py-20 font-bold text-center w-2/3 flex-wrap">
        Najbolje slastičarnice u kojima možete pronaći i naše toppere
      </h2>
      <div
        className="flex flex-col items-center lg:flex-row lg:justify-around"
        style={{ maxWidth: "1900px" }}
      >
        <Partner
          src="/partners/butik-torti.png"
          title="Butik Torti"
          link="https://slasticarnica.com/"
        />
        <Partner
          src="/partners/2sweet.png"
          title="2Sweet"
          link="https://www.2sweet.eu/"
        />
        <Partner
          src="/partners/sweet-family.png"
          title="Sweet Family"
          link="https://slasticarnica-sweet-family.eatbu.com/"
        />
      </div>
    </section>
  );
};
export default Partners;
