import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../../../utils/constant";
import { toast } from "sonner";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate;

  const changeEventHadler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // console.log(input);
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.err(err.response.data.message);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto ">
        <form
          onSubmit={submitHandler}
          className="bg-blue-200 w-1/2 border border-gray-400 rounded-md p-7 my-10"
        >
          <h1 className="font-bold text-3xl mb-6 ">Login</h1>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="enter your email"
              name="email"
              value={input.email}
              onChange={changeEventHadler}
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter password"
              name="password"
              value={input.password}
              onChange={changeEventHadler}
            />
          </div>

          <div className="mt-5">
            <RadioGroup
              defaultValue="option-one"
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                {/* <RadioGroupItem value="option-one" id="option-one" /> */}
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHadler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                {/* <RadioGroupItem value="option-two" id="option-two" /> */}
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "student"}
                  onChange={changeEventHadler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="mt-6">
            <Button type="submit" className="bg-purple-600 w-full">
              Login
            </Button>
          </div>
          <div className="mt-3">
            <span>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-800">
                signup
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
