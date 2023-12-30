import { Partner } from "./Partner";

const Partners = () => {
  return (
    <section className="bg-roza2 mb-16 flex flex-col items-center">
      <h2 className=" text-2xl md:text-4xl pt-12 pb-20 xl:pb-24 text-center w-2/3 flex-wrap tracking-wider">
        Naši najvjerniji partneri
      </h2>
      <div
        className="flex flex-col items-center lg:flex-row flex-wrap lg:justify-center lg:gap-x-5"
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
        <Partner
          src="/partners/Gea.webp"
          title="Slastice Gea"
          link="https://www.instagram.com/slastice_gea?igsh=MTd2Ym14OG13cnh1OA=="
        />
      </div>
    </section>
  );
};
export default Partners;
