import express from 'express'
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

import User from '../models/user.js';

const saltRounds = 10;

export const getUser = async (req, res) => {
    try {
        const { userid, passwd } = req.params;

        const compare = bcrypt.compareSync(passwd, userMesage.passwd);
        
        if (compare) {
            const userMessage = await User.find({ userid: userid, passwd: passwd });
            res.status(200).json(userMessage);
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createUser = async (req, res) => {
    const userInfo = req.body;
    try {
        const hash = bcrypt.hashSync(userInfo.passwd, saltRounds);
        const newUser = new User({ ...userInfo, passwd: hash });

        await newUser.save();
        res.status(201).json({ message: "New User Created"});
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updateUser = async (req, res) => {
    const { _id } = req.params;
    const user = req.body

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