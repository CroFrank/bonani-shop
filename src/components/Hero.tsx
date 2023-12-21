import { Carousel } from "@material-tailwind/react";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <section className="h-[70vh] mx-auto">
      <Carousel
        transition={{ duration: 2 }}
        className="overflow-hidden"
        autoplay={true}
        autoplayDelay={5000}
        loop={true}
      >
        <HeroCard
          title="Cake Toppers"
          description="Neizostavni sastojak svake torte"
          src="carousel/kaja2.webp"
          route="/cake-toppers"
        />
        <HeroCard
          title="Stiže uskoro"
          description="Donosimo nove proizvode"
          src="https://plus.unsplash.com/premium_photo-1664288966707-b3bbfcf45c65?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          route="/"
        />
      </Carousel>
    </section>
  );
};

export default Hero;
