import mongoose from 'mongoose';

import Posts from '../models/post.js';

export const createPost = async (req, res) => {
    const postInfo = req.body;
    try {
        if (!req.userId) return res.json({message: "Unathenticated"});
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

export const updatePost = async (req, res) => {
    const { _id } = req.params;
    const post = req.body;
    if (!req.userId) return res.json({message: "Unathenticated"});

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that _id");

    const newPost = await Posts.findByIdAndUpdate(_id, {...post, _id}, { new: true });

    res.json(newPost);
}

export const deletePost = async (req, res) => {
    const { _id } = req.params;
    if (!req.userId) return res.json({message: "Unathenticated"});
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

    await Posts.findByIdAndRemove(_id);

    res.json({message: 'Post deleted successfully'});
}