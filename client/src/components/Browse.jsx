import React from "react";
import Navbar from "./shared/Navbar";
import JobCards from "./JobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const Browse = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Result ({randomJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {randomJobs.map((item, index0) => {
            return <JobCards />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
