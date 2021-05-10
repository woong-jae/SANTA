import express from 'express'
import mongoose from 'mongoose';

import UserMessage from '../models/userMessage.js';

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userMessage = await UserMessage.find({ id: id });

        res.status(200).json(userMessage);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createUser = async (req, res) => {
    const userInfo = req.body;
    const newUser = new UserMessage(userInfo);
    try {
        await newUser.save();
        // res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}