interface CardProps {
  src: string;
  alt: string;
  attribute?: string;
  title: string;
}

const Card = ({ src, alt, attribute, title }: CardProps) => {
  return (
    <a href="/" className="w-full">
      <div className="relative rounded-sm h-72">
        <img
          src={src}
          alt={alt}
          className="w-full h-72 rounded-sm object-cover"
        />
        <span
          className={`${
            attribute ? "absolute" : "hidden"
          }  top-3 right-4 bg-yellow-600 px-3 py-2 p-1 rounded-full text-black z-10`}
        >
          {attribute}
        </span>
      </div>
      <div className=" rounded-b-md h-20 bg-roza3 flex items-center justify-center text-white font-semibold">
        <p className="px-3 py-2 text-center">{title}</p>
      </div>
    </a>
  );
};
export default Card;
