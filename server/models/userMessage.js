import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: String,
    passwd: String,
    email: String,
    age: Number,
    sex: String,
    nickname: String,
});

const UserMessage = mongoose.model('UserMessage', userSchema);

export default UserMessage;