import express from 'express';

import { getUser, createUser, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/:userid/:passwd', getUser);
router.post('/', createUser);
router.patch('/:userid/:passwd', updateUser);

export default router;