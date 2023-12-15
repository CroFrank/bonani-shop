import Card from "./Card"

const Cards = () => {
  return (
    <section className="container mx-auto grid place-items-center grid-cols-2 xl:grid-cols-4 gap-1 gap-y-4 sm:gap-4 mb-16">
      <Card
        src="/cake-toppers/sjajni/happy-30-birthday.jpeg"
        alt="Cake Topper rođendan"
        title="Šljokičavi i svjetlucavi"
      />
      <Card
        src="/cake-toppers/zlatni/n&t.jpeg"
        alt="Cake topper shaker, special"
        attribute="Best Seller"
        title="Zlatni cake topper"
      />
      <Card
        src="/cake-toppers/3d/mala-sirena.jpeg"
        alt="Cake Topper shaker, special"
        attribute="Special"
        title="3D sa punjenjem"
      />
      <Card
        src="/cake-toppers/pleksi/pleksi.jpg"
        alt="Cake Topper od pleksiglasa"
        title="Cake topper od pleksiglasa"
      />
    </section>
  )
}
export default Cards
