import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

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
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        {images.map((image: CakeTopperProps, i: number) => (
          <div
            key={i}
            className="relative flex h-72 justify-end items-end overflow-hidden rounded-md shadow-lg md:h-96"
          >
            <div className="absolute inset-0 flex h-full w-full object-cover object-center">
              <Card className="w-full">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="h-96 m-0 rounded-b-none"
                >
                  <img
                    src={`/cake-toppers/${path}/${image.img}`}
                    alt={alt}
                    className="h-full w-full object-cover"
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
                        <Button>Doznaj Više</Button>
                      </PopoverHandler>
                      <PopoverContent className="z-[999] grid w-full h-2/3 grid-cols-1 md:grid-cols-2 md:w-5/6 xl:w-2/3 2xl:w-1/2 overflow-hidden p-0">
                        <div className="min-h-full !w-full p-3">
                          <img
                            src={`/cake-toppers/${path}/${image.img}`}
                            alt={alt}
                            className="h-full w-full rounded-lg object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <Typography
                            color="blue-gray"
                            className="mb-5 text-2xl font-bold"
                          >
                            {image.id}
                          </Typography>
                          <Typography
                            variant="paragraph"
                            color="gray"
                            className="mb-14 font-normal text-blue-gray-500"
                          >
                            {image.text}
                          </Typography>
                          <a href="/contact" className="-ml-3 inline-block">
                            <Button
                              size="lg"
                              variant="text"
                              className="flex items-center gap-x-2 capitalize"
                            >
                              Pošaljite upit
                              <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.25 1.91669L5.33333 6.00002L1.25 10.0834"
                                  stroke="#212121"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
