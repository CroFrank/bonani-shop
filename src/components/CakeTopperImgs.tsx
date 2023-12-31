import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Images from "./Images";
import { data } from "../data";

export function CakeTopperImgs() {
  return (
    <Tabs value="3d">
      <TabsHeader className="w-full lg:w-2/3 mx-auto bg-roza3 mb-10">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label.toUpperCase()}
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
  );
}
