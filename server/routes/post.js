import express from 'express';

import { createPost, getPosts, updatePost, deletePost } from '../controllers/post.js';

const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.patch('/:_id', updatePost);
router.delete('/:_id', deletePost);

export default router;
