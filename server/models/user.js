import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwd: {
        type: String,
        required: true
    },
    birth: {
        type: Date,
        default: new Date()
    },
    sex: String,
    nickname: {
        type: String,
        unique: true,
    },
    appliedPosts: {
        type: [String],
        defaulte: []
    }
});

const User = mongoose.model('User', userSchema);
export default User;