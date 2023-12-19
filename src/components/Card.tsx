import pkg from "@material-tailwind/react";
const { Typography } = pkg;

interface CardProps {
  src: string;
  alt: string;
  attribute?: string;
  title: string;
}

const Card = ({ src, alt, attribute, title }: CardProps) => {
  return (
    // <a href="/cake-toppers" className="w-full">
    //   <div className="relative rounded-sm h-72">
    //     <img
    //       src={src}
    //       alt={alt}
    //       className="w-full h-72 rounded-sm object-cover"
    //     />
    //     <span
    //       className={`${
    //         attribute ? "absolute" : "hidden"
    //       }  top-3 right-4 bg-yellow-600 px-3 py-2 p-1 rounded-full text-black z-10`}
    //     >
    //       {attribute}
    //     </span>
    //   </div>
    //   <div className=" rounded-b-md h-20 bg-roza3 flex items-center justify-center text-white font-semibold">
    //     <p className="px-3 py-2 text-center">{title}</p>
    //   </div>
    // </a>
    <figure className="relative h-96 w-full">
      <img
        className="h-full w-full  object-cover object-center"
        src={src}
        //       alt={alt}
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-center bg-roza1/60 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="tracking-widest"
          >
            {title.toUpperCase()}
          </Typography>
        </div>
      </figcaption>
    </figure>
  );
};
export default Card;
