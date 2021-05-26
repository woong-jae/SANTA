import express from 'express';

import { createPost, getPosts, updatePost, deletePost } from '../controllers/post.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createPost);
router.get('/:mountain', getPosts);
router.patch('/:_id', auth, updatePost);
router.delete('/:_id', auth, deletePost);

export default router;
