import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  mountain: String,
  createdUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  contact: String,
  maxMember: Number,
  currentMember: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  ageLimit: {
    type: [Number],
    default: [1, 100],
  },
  date: {
    type: Date,
    default: new Date(),
  },
  dueDate: Date,
});

const Posts = mongoose.model("Posts", postSchema);
export default Posts;
