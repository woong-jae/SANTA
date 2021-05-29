import express from 'express';

import { createPost, getPosts, getPostById, getPostByMt, updatePost, deletePost, applyPost } from '../controllers/post.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/:_id', getPostById);
router.get('/search/:mountain/:date/:peopleNum', getPostByMt);
router.patch('/:_id', auth, updatePost);
router.patch('/apply/:_id', auth, applyPost);
router.delete('/:_id', auth, deletePost);

export default router;
