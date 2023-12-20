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
        className={`rounded-3xl py-5 px-4 w-fit flex gap-2 items-center tracking-wider ${
          scroll > goal ? "scale-125 text-zelena" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Feature;
