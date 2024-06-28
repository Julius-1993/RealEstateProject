import express from 'express';
import {getAllReview, createReview} from '../controller/review.controller.js';

const router = express.Router();

router.get('/reviews', getAllReview);
router.post('/reviews', createReview);

export default router;