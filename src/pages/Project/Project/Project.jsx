import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FrontEnd from "../FrontEnd/FrontEnd";
import FullStack from "../FullStack/FullStack";

const Project = () => {
  return (
    <div>
      <h2 className="text-4xl text-zinc-700 font-bold text-center mt-10 mb-8">
        My Project
      </h2>
      <FullStack></FullStack>

      {/* <div className="flex justify-center">
        <Tabs>
          <TabList>
            <Tab>
              <button className=" bg-cyan-700  mb-4 md:mb-0 text-white mx-auto h-[50px] w-[150px] overflow-hidden rounded-md shadow-md duration-300 hover:scale-95 hover:shadow-lg shadow-slate-800">
                FrontEnd
              </button>
            </Tab>
            <Tab>
              <button className=" bg-cyan-700  mb-4 md:mb-0 text-white mx-auto h-[50px] w-[150px] overflow-hidden rounded-md shadow-md duration-300 hover:scale-95 hover:shadow-lg shadow-slate-800">
                FullStack
              </button>
            </Tab>
          </TabList>

          <TabPanel>
            <FrontEnd></FrontEnd>
          </TabPanel>
          <TabPanel>
            <FullStack></FullStack>
          </TabPanel>
        </Tabs>
      </div> */}
    </div>
  );
};

export default Project;
