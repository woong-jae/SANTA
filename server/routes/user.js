import express from 'express';

import { getUser, createUser, updateUser, deleteUser, loginUser } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/:_id', getUser);
router.post('/signin', loginUser);
router.post('/signup', createUser);
router.patch('/:_id', auth, updateUser);
router.delete('/:_id', auth, deleteUser);

export default router;