import express from 'express';

import { getTrailInfo, getForestStory } from "../controllers/forest.js";

const router = express.Router();

router.get('/:userQuery', getTrailInfo);
router.get('/detail/:userQuery', getForestStory);

export default router;