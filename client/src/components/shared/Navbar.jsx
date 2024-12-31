import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "../ui/button";
import { User2 } from "lucide-react";
import { LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [user, setUser] = useState(false);
  return (
    <div className="bg-slate-200 ">
      <div className="flex items-center justify-between py-4 px-10">
        <div>
          <h1 className=" text-4xl font-bold">
            Job <span className="text-blue-800">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                {" "}
                <Button variant="outline">login</Button>{" "}
              </Link>
              <Link to="/signup">
                {" "}
                <Button className="bg-purple-600 hover:bg-purple-800">
                  signup
                </Button>{" "}
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage
                    src="https://plus.unsplash.com/premium_photo-1732757787588-29df717691f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbiUyMGJveSUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
                    className="cursor-pointer"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-88">
                <div className="flex gap-2 space-y-2">
                  <Avatar>
                    <AvatarImage
                      src="https://plus.unsplash.com/premium_photo-1732757787588-29df717691f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbiUyMGJveSUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
                      className="cursor-pointer"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Shivam</h4>
                    <p className="text-sm text-muted-foreground">
                      welcome to jpbPortal
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-700">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2></User2>
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut></LogOut>
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
