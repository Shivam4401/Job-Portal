import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="text-xl text-purple-800">No.1 Job Hunt website</span>
        <h1 className="text-5xl font-bold my-8">
          Search, Apply <br /> Get Your{" "}
          <span className="text-red-800">Dream Job</span>{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          odio explicabo laudantium et.
        </p>
        <div className="flex w-[40%] shadow-lg border border-purple-400 justify-between ml-[30%] items-center mx-auto rounded-full gap-4 my-8 ">
          <input
            type="text"
            placeholder="Find your dream job"
            className="outline-none border-none w-full pl-4"
          />
          <Button className="bg-purple-600 rounded-r-full">
            <Search />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
