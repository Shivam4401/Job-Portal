import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import JobCards from "./JobCards";
import { SpaceIcon } from "lucide-react";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Jobs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-8xl mx-auto mt-7">
        <div className="flex gap-8 ">
          <div className="w-[15%] pl-7">
            <FilterCard></FilterCard>
          </div>

          {jobsArray.length <= 0 ? (
            <span>Job Not Found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-9">
                {jobsArray.map((item, index) => (
                  <div>
                    <JobCards></JobCards>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
