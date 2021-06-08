import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";
import postsRoutes from "./routes/post.js";
import forestRoutes from "./routes/forest.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/post", postsRoutes);
app.use("/forest", forestRoutes);

app.use("/", (req, res) => {
  res.send("Server running...");
});

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running or port: ${PORT}`)))
    .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
