import { Button, Typography } from "@material-tailwind/react";

interface HeroCardProps {
  title: string;
  description: string;
  src: string;
  route: string;
}

const HeroCard = ({ title, description, src, route }: HeroCardProps) => {
  return (
    <div className="relative h-full w-full">
      <img src={src} alt="Cake topper" className="h-full w-full object-cover" />
      <div className="absolute inset-0 grid h-full w-full items-center justify-items-center md:justify-items-start bg-black/50">
        <div className="w-3/4 text-center md:w-2/4 md:pl-3">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-4xl md:text-4xl lg:text-6xl tracking-wider font-normal"
          >
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80 tracking-wider"
          >
            {description}
          </Typography>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href={src !== "carousel/kaja2.webp" ? "/" : route}>
              <Button
                size="sm"
                color="green"
                variant="filled"
                className="xl:text-lg tracking-widest hover:bg-white hover:text-zelena rounded-none bg-zelena hover:shadow-none"
                aria-label="go to next image"
                disabled={src !== "carousel/kaja2.webp" ? true : false}
              >
                Zaviri u ponudu
              </Button>
            </a>
            <a
              href="/contact
            "
            >
              <Button
                size="sm"
                color="white"
                variant="outlined"
                className="xl:text-lg tracking-widest hover:bg-white hover:text-zelena rounded-none border-zelena"
                aria-label="go to next image"
              >
                Kontakt
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroCard;
