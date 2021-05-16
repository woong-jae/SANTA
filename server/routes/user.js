import express from 'express';

import { getUser, createUser, updateUser, deleteUser, loginUser } from '../controllers/user.js';

const router = express.Router();

router.get('/:_id', getUser);
router.post('/login', loginUser);
router.post('/', createUser);
router.patch('/:_id', updateUser);
router.delete('/:_id', deleteUser);

export default router;