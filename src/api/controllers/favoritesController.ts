import { Request, Response } from 'express';
import axios from 'axios';

// favoritesController contains request handlers for /favorites routes

const favoritesController = {
  postFavorites: async function (req: Request, res: Response) {},
  getFavorites: async function (req: Request, res: Response) {},
  getFavoritesId: async function (req: Request, res: Response) {},
  getFavoritesIdFile: async function (req: Request, res: Response) {},
};

export default favoritesController;
