import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react"
import Images from "./Images"

export function CakeTopperImgs() {
  const data = [
    {
      label: "Hammer",
      value: "hammer",
      imgs: ["dual-torta.jpeg"],
      alt: "Cake topper od hammer papira",
      path: "hammer",
    },
    {
      label: "Zlatni",
      value: "zlatni",
      imgs: ["n&t.jpeg", "sretna-50-godisnjica-braka.jpeg"],
      alt: "Cake topper od zlatnog papira",
      path: "zlatni",
    },
    {
      label: "Sjajni",
      value: "sjajni",
      imgs: ["happy-30-birthday.jpeg"],
      alt: "Cake topper od sjajnog papira",
      path: "sjajni",
    },
    {
      label: "3D",
      value: "3d",
      imgs: ["mala-sirena.jpeg", "unicorn.jpg"],
      alt: "Cake topper u više slojeva",
      path: "3d",
    },
    {
      label: "Pleksi",
      value: "pleksi",
      imgs: ["pleksi.jpg"],
      alt: "Cake topper od pleksiglasa",
      path: "pleksi",
    },
  ]
  return (
    <Tabs value="zlatni">
      <TabsHeader className="w-full lg:w-2/3 mx-auto bg-zelena">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, imgs, alt, path }) => (
          <TabPanel key={value} value={value}>
            <Images images={imgs} alt={alt} path={path} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
