import express from 'express';

import { getMountainInfo } from "../controllers/forest.js";

const router = express.Router();

router.get('/:userQuery', getMountainInfo);

export default router;