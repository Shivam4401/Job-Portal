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
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { setLoading } from "../../../redux/authSlice";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const { loading } = useSelector((store) => store.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const changeEventHadler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !input.fullName ||
      !input.email ||
      !input.phoneNumber ||
      !input.password ||
      !input.role
    ) {
      toast.error("All fields are required");
      return;
    }

    // Create FormData
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    // Add file if provided
    if (input.file && input.file instanceof File) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
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
          className=" bg-blue-200 w-1/2 border border-gray-400 rounded-md p-7 my-10"
        >
          <h1 className="font-bold text-3xl mb-6 ">Sign Up</h1>
          <div>
            <Label>Fullname</Label>
            <Input
              type="text"
              value={input.fullName}
              name="fullName"
              onChange={changeEventHadler}
              placeholder="enter your name"
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHadler}
              placeholder="enter your email"
            />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHadler}
              placeholder="enter your phone number"
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHadler}
              placeholder="password"
            />
          </div>
          <div>
            <Label>Profile</Label>
            <Input
              accept="image/*"
              type="file"
              onChange={changeFileHandler}
              className="cursor-pointer"
            ></Input>
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
              Already have an account?{" "}
              <Link to="/login" className="text-blue-800">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
