import express from 'express';
const router = express.Router();
import controller from '../controllers/filmsController';

// get Films API

router.get('/', controller.getFilms);

export default router;
