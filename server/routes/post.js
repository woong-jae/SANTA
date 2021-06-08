import express from 'express';

import { createPost, getPosts, getPostById, getPostByMt, updatePost, deletePost, applyPost, unApplyPost, getUserPosts, getUserAppliedPosts } from '../controllers/post.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// GET
router.get('/', getPosts);
router.get('/:_id', getPostById);
router.get('/created/:_id', getUserPosts);
router.get('/applied/:_id', getUserAppliedPosts);
router.get('/search/:mountain/:date/:peopleNum', getPostByMt);

// POST
router.post('/', auth, createPost);

// UPDATE
router.patch('/:_id', auth, updatePost);
router.patch('/apply/:_id', auth, applyPost);
router.patch('/unapply/:_id', auth, unApplyPost);

// DELETE
router.delete('/:_id', auth, deletePost);

export default router;
