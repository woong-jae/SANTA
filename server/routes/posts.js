import express from 'express';

import { createPost, getPosts, getPostInfo } from '../controllers/posts.js';

const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:_id', getPostInfo);

export default router;
