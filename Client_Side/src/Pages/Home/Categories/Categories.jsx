import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MermaidDoll from "./MermaidDoll";
import PrincessDoll from "./PrincessDoll";
import FrozenDoll from "./FrozenDoll";

const Categories = () => {
  return (
    <div className="p-10 bg-pink-100">
      <h6 className="text-2xl font-serif text-yellow-700 mt-5 text-center py-5">
        Browse The Most Popular Categories
      </h6>
      <Tabs>
        <TabList className="flex justify-center gap-2 lg:gap-64 mt-7">
          <Tab className="bg-pink-100">
            <div className="rounded p-4 h-full transition ease-in-out delay-150 bg-red-300 hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300">
              <h6 className="text-white font-bold mb-2">Disney Mermaid</h6>
              <img
                className="w-8 mx-auto rounded-3xl"
                src="https://e7.pngegg.com/pngimages/18/809/png-clipart-disney-little-mermaid-ariel-illustration-little-mermaid-face-close-up-at-the-movies-cartoons-thumbnail.png"
                alt=""
              />
            </div>
          </Tab>
          <Tab className="bg-pink-100">
            <div className="rounded h-full p-4 transition ease-in-out delay-150 bg-yellow-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300">
              <h6 className="text-white font-bold mb-2">Disney Princess</h6>
              <img
                className="w-8 mx-auto rounded-3xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHBCm5OHhyvvfH4KpPkCvd-XroPa97FaIhA&usqp=CAU"
                alt=""
              />
            </div>
          </Tab>
          <Tab className="bg-pink-100 ">
            <div className="rounded h-full p-4 transition ease-in-out delay-150 bg-sky-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300">
              <h6 className="text-white font-bold mb-2">Disney Frozen</h6>
              <img
                className="w-8 mx-auto rounded-3xl"
                src="https://w7.pngwing.com/pngs/504/355/png-transparent-elsa-from-the-movie-frozen-illustration-elsa-frozen-olafs-quest-kristoff-anna-elsa-free-cartoons-cartoon-girl-thumbnail.png"
                alt=""
              />
            </div>
          </Tab>
        </TabList>
        <TabPanel>
          <div className="bg-red-300 p-10">
            <MermaidDoll></MermaidDoll>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="bg-yellow-300 p-10">
            <PrincessDoll></PrincessDoll>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="bg-sky-300 p-10">
            <FrozenDoll></FrozenDoll>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
