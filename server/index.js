const express = require("express"); // we can use :- import express from "express";
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
// require("dotenv").config();
const connectDB = require("./utils/db.js");
const userRoute = require("./routes/user.route.js");
const companyRoute = require("./routes/company.route.js");
const jobRoute = require("./routes/job.route.js");
const applicationRoute = require("./routes/application.route.js");
dotenv.config();
const app = express();
const port = process.env.PORT || 4500;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

const corsOption = {
  origin: "http//localhost:5173",
  Credentials: true,
};

app.use(cors(corsOption));

app.get("/home", (req, res) => {
  return res.status(200).json({
    message: "I am shivam",
    success: true,
  });
});

// api's
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
