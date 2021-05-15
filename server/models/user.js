import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userid: {
        type: String,
        required: true,
        unique: true
    },
    passwd: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    birth: {
        type: Date,
        default: new Date()
    },
    sex: String,
    nickname: String,
});

const User = mongoose.model('UserMessage', userSchema);

export default User;