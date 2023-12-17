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
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            {description}
          </Typography>
          <div className="flex justify-center gap-2">
            <a href={route}>
              <Button
                size="sm"
                color="white"
                variant="outlined"
                className="xl:text-xl"
              >
                Zaviri u ponudu
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroCard;
