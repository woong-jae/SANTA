import express from 'express';

import { createPost, getPosts } from '../controllers/posts.js';

const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);