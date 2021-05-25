import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    mountain: String,
    createdUser: String,
    contact: String,
    maxMember: Number,
    currentMember: {
        type: [String],
        default: []
    },
    ageLimit: {
        type: [Number],
        default: [1, 100]
    },
    date: {
        type: Date,
        default: new Date()
    },
    dueDate: Date
});

const Posts = mongoose.model('Posts', postSchema);
export default Posts;