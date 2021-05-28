import express from 'express';

import { createPost, getPosts, getPostByMt, updatePost, deletePost } from '../controllers/post.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/:mountain/:date/:peopleNum', getPostByMt);
router.patch('/:_id', auth, updatePost);
router.delete('/:_id', auth, deletePost);

export default router;
