import React from "react";
import { RadioGroupItem } from "./ui/radio-group";
import { RadioGroup } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Noida",
      "Gurgaon",
      "Bangalore",
      "Hyderabad",
      "Pune",
      "Mumbai",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "React.js Developer",
      "HCM",
      "SAP Hana",
      "Fullstack Developer",
      "DBA",
    ],
  },
  {
    filterType: "Salary",
    array: ["15k-25k", "25k-50k", "50k-1Lakh", "1lakh-2lakh"],
  },
];

const FilterCard = () => {
  return (
    <div>
      <h1 className="font-bold text-xl ">Filter Jobs</h1>
      <hr className="text-gray-400 mt-4" />
      <RadioGroup>
        {filterData.map((data, index) => {
          return (
            <div key={index}>
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {data.array.map((item, index) => {
                return (
                  <div>
                    <RadioGroupItem value={item} key={index} />
                    <Label>{item}</Label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
