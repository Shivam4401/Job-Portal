import React from "react";
import { Badge } from "@/components/ui/badge";

const LatestJobCard = () => {
  return (
    <div className="p-10 rounded-md shadow-xl bg-white border-gray-200 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company Nmae</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>

      <div>
        <h1 className="font-bold text-lg">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus atque
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          12 Positions
        </Badge>
        <Badge className="text-red-700 font-bold" variant="ghost">
          Part Time
        </Badge>
        <Badge className="text-purple-700 font-bold" variant="ghost">
          2 LPA{" "}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;
