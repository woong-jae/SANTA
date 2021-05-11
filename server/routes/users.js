import express from 'express';

import { getUser, createUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:_id', updateUser);

export default router;