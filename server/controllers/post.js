import mongoose from 'mongoose';

import Posts from '../models/post.js';
import User from '../models/user.js';

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
        const posts = await Posts.find().populate('createdUser').populate('currentMember');
        
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getPostById = async (req, res) => {
    const { _id } = req.params;
    try {
        const post = await Posts.findById(_id).populate('createdUser').populate('currentMember');
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getUserPosts = async (req, res) => {
    const { _id } = req.params;
    try {
        const posts = await Posts.find({ createdUser: _id }).populate('createdUser').populate('currentMember');
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getPostByMt = async (req, res) => {
    try {
        const posts = await Posts.find({mountain: req.params.mountain, 
            date: {$gte: `${req.params.date}T00:00:00.000Z`, $lt: `${req.params.date}T23:59:59.000Z`},
            $expr: { $lt: [{$size: "$currentMember"}, {$subtract: ['$maxMember', parseInt(req.params.peopleNum)]}]}
        }).populate('createdUser').populate('currentMember');
            
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

    const newPost = await Posts.findByIdAndUpdate(_id, {...post, _id}, { new: true }).populate('createdUser').populate('currentMember');

    res.json(newPost);
}

export const applyPost = async (req, res) => {
    const { _id } = req.params;
    const { userID } = req.body;

    if (!req.userId) return res.json({message: "Unathenticated"});

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that _id");

    try {
        const curPost = await Posts.findById(_id);
        if (curPost.currentMember.length + 2 <= curPost.maxMember && !curPost.currentMember.some(member => member.toString() === userID)) {
            const newPost = await Posts.findByIdAndUpdate(_id, {$push: { currentMember: userID }}, {new: true}).populate('createdUser').populate('currentMember');
            await User.findByIdAndUpdate(userID, {$push: { appliedPosts: _id }});
            res.json(newPost);
        } else {
            const newPost = await Posts.findByIdAndUpdate(_id, {$pull: { currentMember: userID }}, {new: true}).populate('createdUser').populate('currentMember');
            await User.findByIdAndUpdate(userID, {$pull: { appliedPosts: _id }});
            res.json(newPost);
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const deletePost = async (req, res) => {
    const { _id } = req.params;
    if (!req.userId) return res.json({message: "Unathenticated"});
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
    try {
        const post = await Posts.findById(_id);
        post.currentMember.forEach(async (member) => {
            await User.findByIdAndUpdate(member, {$pull: {appliedPosts: post._id}});
        });

        await Posts.findByIdAndRemove(_id);
        res.json({message: 'Post deleted successfully'});
    } catch (error) {
        res.status(404).json({ message: error });   
    }
}