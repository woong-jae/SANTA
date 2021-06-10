import mongoose from "mongoose";

const notiSchema = mongoose.Schema({
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    createdAt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts",
    },
    createdTime: {
        type: Date,
        default: new Date()
    },
    message: String,
    read: {
        type: Boolean,
        default: false
    }
});

const Notification = mongoose.model("Notification", notiSchema);
export default Notification;