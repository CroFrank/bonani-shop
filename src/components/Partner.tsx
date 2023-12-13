import pkg from "@material-tailwind/react"
const { Card, CardHeader, CardBody, CardFooter, Typography, Button } = pkg

export function Partner({
  src,
  title,
  link,
}: {
  src: string
  title: string
  link: string
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
  )
}
// <div
//   className={`px-3 py-5 flex w-full ${
//     reverse ? "flex-row-reverse" : ""
//   } justify-around`}
//   style={{ maxWidth: "1400px" }}
// >
//   <img src={src} alt="" className="w-5/12 h-auto object-cover rounded-xl" />
//   <div className="w-5/12 flex flex-col items-center justify-center">
//     <h3 className="text-2xl font-semibold pt-5 pb-16">{title}</h3>
//     <div className="flex justify-center items-center gap-3 mb-5">
//       <CheckMark />
//       <p>Najbolji okusi</p>
//     </div>
//     <div className="flex justify-center items-center gap-3 mb-5">
//       <CheckMark />
//       <p>Kolači i torte</p>
//     </div>
//     <div className="flex justify-center items-center gap-3 mb-5">
//       <CheckMark />
//       <p>Kvalitetni sastojci</p>
//     </div>
//   </div>
// </div>
