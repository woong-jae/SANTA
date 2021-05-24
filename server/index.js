import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";
import postsRoutes from "./routes/post.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/post", postsRoutes);

app.use("/", (req, res) => {
  res.send("Server running...");
});

<<<<<<< HEAD
const URL = "mongodb+srv://admin-woong:bf3qVT6hq0TNNMur@cluster0.dthag.mongodb.net/webProject?retryWrites=true&w=majority"
const PORT = process.env.PORT || 4000;

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running or port: ${PORT}`)))
    .catch((error) => console.log(error));
=======
const URL =
  "mongodb+srv://admin-woong:bf3qVT6hq0TNNMur@cluster0.dthag.mongodb.net/webProject?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running or port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
>>>>>>> ec71639c8f8bf85e7e902c011d34b8120b09b2d2

mongoose.set("useFindAndModify", false);
