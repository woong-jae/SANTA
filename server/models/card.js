import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    mountain: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    limit_member: {
        type: Number,
        default: 4,
        max: 4
    },
    cur_member: Number,
    description: String
});

const Card = mongoose.model('Card', cardSchema);

export default Card;