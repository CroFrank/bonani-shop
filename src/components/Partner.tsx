import pkg from "@material-tailwind/react";
const { Card, CardHeader, CardBody, CardFooter, Typography, Button } = pkg;

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
    <Card className="mb-20 w-full sm:w-2/3 lg:w-1/4">
      <CardHeader color="blue-gray" className="relative h-70">
        <img
          src={src}
          alt="Slastičarnica sa kojom surađuje Bonani"
          className="object-cover"
        />
      </CardHeader>
      <div className="text-center">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a
            target="_blank"
            href={link}
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-700"
          >
            Posjeti slastičarnicu
          </a>
        </CardFooter>
      </div>
    </Card>
  );
}
