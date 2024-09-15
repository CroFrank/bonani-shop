import pkg from "@material-tailwind/react";
const { Card, CardHeader, CardBody, CardFooter, Typography } = pkg;

export function Partner({
  src,
  title,
  link,
}: {
  src: string;
  title: string;
  link: string;
}) {
  return (
    <Card className="mb-20 w-80 lg:w-96 rounded-none">
      <CardHeader
        color="blue-gray"
        className="relative h-70 rounded-lg shadow-roza2"
      >
        <img
          src={src}
          alt="Slastičarnica sa kojom surađuje Bonani"
          className="object-cover"
        />
      </CardHeader>
      <div className="text-center">
        <CardBody>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-2 tracking-widest font-normal text-lg"
          >
            {title}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a
            target="_blank"
            href={link}
            className="inline-block bg-zelena text-white font py-2 px-4 transition duration-300 hover:bg-roza3 tracking-wider"
          >
            Posjeti slastičarnicu
          </a>
        </CardFooter>
      </div>
    </Card>
  );
}
