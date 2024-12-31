import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../../../utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHadler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.email || !input.password || !input.role) {
      toast.error("All fields are required");
      return;
    }

    try {
      dispatch(setLoading(true));
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
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
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
              // defaultValue="option-one"
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
                  value="recuriter"
                  checked={input.role === "recuriter"}
                  onChange={changeEventHadler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="mt-6">
            {loading ? (
              <Button className="w-full">
                {" "}
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </Button>
            ) : (
              <Button type="submit" className="bg-purple-600 w-full">
                Login
              </Button>
            )}
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
