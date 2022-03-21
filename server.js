require("dotenv").config();
const express = require("express");
const app = express();
const Port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const controllers = require("./controller/authController");
const AuthRoutes = require("./Routes/authRoutes");
const UserRoutes = require("./Routes/userRoutes");

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", AuthRoutes);
app.use("/user", UserRoutes);

app.use("/", (req, res) => {
  res.send("Server Started");
});

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(Port, () => {
      console.log(`Server is running on port ${Port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
