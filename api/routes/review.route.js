import express from 'express';
import {getAllReview, makeReview} from '../controller/review.controller.js';

const router = express.Router();

router.get('/reviews/:id', getAllReview);
router.post('/reviews', makeReview);

export default router;