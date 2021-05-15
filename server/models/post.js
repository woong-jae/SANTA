import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    createdUser: String,
    maxPeople: Number,
    currentPeople: Number,
    minAge: Number,
    maxAge: Number,
    postDate: {
        type: Date,
        default: new Date()
    },
    dueDate: Date
});

const Posts = mongoose.model('Posts', postSchema);
export default Posts;