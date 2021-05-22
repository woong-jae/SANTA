import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const getUser = async (req, res) => {
    try {
        const { _id } = req.params;
        
        const user = await User.findById(_id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, passwd } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({message: "User doesn't exist"});

        const compare = await bcrypt.compare(passwd, user.passwd);
        if (!compare) res.status(404).json({message: "Invalid credentials"});

        const token = jwt.sign({ email: user.email, id: user._id }, 'test', { expiresIn: "1h"});

        res.status(200).json({ result: user, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

export const createUser = async (req, res) => {
    const { email, passwd, birth, sex, nickname } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) return res.status(404).json({message: "User already exist"});

        const hashedPasswd = await bcrypt.hash(passwd);
        
        const result = await User.create({ email, passwd: hashedPasswd, birth, sex, nickname });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h"});

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

export const updateUser = async (req, res) => {
    const { _id } = req.params;
    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No user with that _id");

    await UserMessage.findByIdAndUpdate(_id, {...user, _id}, { new: true });

    res.json({ message: 'User updated successfully'});
}

export const deleteUser = async (req, res) => {
    const { _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No user with that id");

    await PostMessage.findByIdAndRemove(_id);

    res.json({message: 'Post deleted successfully'});
}