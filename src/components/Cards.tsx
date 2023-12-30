import Card from "./Card";

const Cards = () => {
  return (
    <section className="container mx-auto grid place-items-center grid-cols-2 lg:grid-cols-4 gap-1 gap-y-4 sm:gap-4 mb-16">
      <Card
        src="/cake-toppers/sjajni/happy-30-birthday.webp"
        alt="Cake Topper rođendan"
        title="Glitter"
      />
      <Card
        src="/cake-toppers/zlatni/mr&mrs.webp"
        alt="Cake Topper obitelj"
        attribute="Best Seller"
        title="Mirror"
      />
      <Card
        src="/cake-toppers/3d/eva3.webp"
        alt="Cake Topper shaker, special"
        attribute="Special"
        title="3D "
      />
      <Card
        src="/cake-toppers/pleksi/h-bday-pleksi.jpg"
        alt="Cake Topper od pleksiglasa"
        title="Plexi"
      />
    </section>
  );
};
export default Cards;
