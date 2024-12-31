import React from "react";
import LatestJobCard from "./LatestJobCard";

let randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJob = () => {
  return (
    <div className="max-w-7xl mx-auto my-15">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-red-900">Latest & Top</span> Job Opening
      </h1>

      <div className="grid grid-cols-3 gap-4 my-7 ml-20">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatestJobCard />
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
