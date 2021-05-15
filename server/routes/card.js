import express from 'express';

import { getAllCard, getCard, createCard, updateCard, deleteCard } from '../controllers/card.js';

const router = express.Router();

router.get('/:mountain/:date', getAllCard); // 일단 산으로 검색했을 때만, 그리고 동행 인원은 어떻게..?
router.get('/:card_id', getCard);
router.post('/', createCard);
router.patch('/:card_id', updateCard);  // Yet
router.delete('/:card_id', deleteCard); // Yet

export default router;