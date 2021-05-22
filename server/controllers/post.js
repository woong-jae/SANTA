import express from 'express'
import mongoose from 'mongoose';

import Posts from '../models/post.js';

export const createPost = async (req, res) => {
    const postInfo = req.body;
    try {
        const newPost = new Posts(postInfo);

        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}