import express from 'express'
import mongoose from 'mongoose';

import User from '../models/user.js';

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userMessage = await User.find({ id: id });

        res.status(200).json(userMessage);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createUser = async (req, res) => {
    const userInfo = req.body;
    const newUser = new User(userInfo);
    try {
        await newUser.save();
        // res.status(201).json(newUser);
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