import express from 'express';

import { getUser, createUser, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.get('/:userid/:passwd', getUser);
router.post('/', createUser);
router.patch('/:_id', updateUser);
router.delete('/:_id', deleteUser);

export default router;