import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { useState } from "react";

interface CakeTopperProps {
  img: string;
  text: string;
  price: string;
  id: string;
}

const Images = ({
  images,
  alt,
  path,
}: {
  images: CakeTopperProps[];
  alt: string;
  path: string;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  console.log(open);
  return (
    <div
      className={`mx-auto max-w-screen-xl px-4 md:px-8 mt-10" ${
        open ? "bg-black/50" : ""
      }`}
    >
      <div className="flex flex-wrap justify-center gap-y-5 gap-x-3">
        {images.map((image: CakeTopperProps, i: number) => (
          <Card className="w-full xs:w-80 sm:w-64 rounded-none bg-roza1">
            <CardHeader
              shadow={false}
              floated={false}
              className="h-96 md:h-80 m-0 rounded-none"
            >
              <img
                src={`/cake-toppers/${path}/${image.img}`}
                alt={alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Popover
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <PopoverHandler>
                    <Button
                      className="bg-roza3 tracking-wider font-semibold rounded-none"
                      onClick={() => console.log("sfsd")}
                    >
                      Doznaj Više
                    </Button>
                  </PopoverHandler>
                  <PopoverContent className="z-[999] grid w-full sm:h-2/3 h-5/6 grid-cols-1 md:grid-cols-2 md:w-5/6 xl:w-2/3 2xl:w-1/2 overflow-hidden p-0">
                    <div className="relative min-h-full !w-full p-3">
                      <img
                        src={`/cake-toppers/${path}/${image.img}`}
                        alt={alt}
                        className="h-full w-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <Typography
                        color="blue-gray"
                        className="mb-5 md:mb-10 md:mt-5 text-2xl md:text-4xl tracking-wider"
                      >
                        {image.id}
                      </Typography>
                      <Typography
                        variant="paragraph"
                        color="gray"
                        className="text-sm md:text-lg md:mb-14 font-normal text-blue-gray-500"
                      >
                        {image.text}
                      </Typography>
                      <a href="/contact" className="mt-4 flex justify-end mr-5">
                        <Button
                          size="sm"
                          variant="outlined"
                          className="flex items-center gap-x-2 capitalize border-roza3 text-roza3 tracking-wider hover:bg-roza3 hover:text-white"
                        >
                          Pošaljite upit
                        </Button>
                      </a>
                    </div>
                  </PopoverContent>
                </Popover>
                <Typography color="blue-gray" className="font-medium">
                  {image.price}
                </Typography>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Images;
