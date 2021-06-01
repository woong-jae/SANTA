import express from 'express';

import { getUser, createUser, updateUser, deleteUser, loginUser } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// GET
router.get('/:_id', getUser);

// POST
router.post('/signin', loginUser);
router.post('/signup', createUser);

// UPDATE
router.patch('/:_id', auth, updateUser);

// DELETE
router.delete('/:_id', auth, deleteUser);

export default router;