import express from 'express'
import mongoose from 'mongoose';

import Posts from '../models/posts.js';

export const createPost = async (req, res) => {
    const postInfo = req.body;
    try {
        const newPost = new User(postInfo);

        await newUser.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}
