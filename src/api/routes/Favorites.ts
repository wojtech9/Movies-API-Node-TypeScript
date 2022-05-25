import express from 'express';
const router = express.Router();
import favoritesController from '../controllers/favoritesController';

// all subroutes of /favorites

router.post('/', favoritesController.postFavorites);
router.get('/', favoritesController.getFavorites);
router.get('/:id', favoritesController.getFavoritesId);
router.get('/:id/file', favoritesController.getFavoritesIdFile);

export default router;
