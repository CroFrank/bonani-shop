const Feature = ({
  text,
  scroll,
  goal,
}: {
  text: string;
  scroll: number;
  goal: number;
}) => {
  return (
    <div className={`text-roza3`}>
      <div
        className={`rounded-3xl py-5 px-4 w-fit font-semibold flex gap-2 items-center ${
          scroll > goal ? "scale-125" : ""
        }`}
      >
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zelena"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
    </div>
  );
};

export default Feature;
