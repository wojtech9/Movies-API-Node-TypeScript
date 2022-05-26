import { Lists } from '../entities/Lists';
import path from 'path';
import { unlink } from 'fs';

//types

import { Request, Response } from 'express';
import FavoritesPayload from '../interfaces/favoritesPayload.interface';
import FavoritesFilms from '../interfaces/favoritesFilms.interface';

//helpers

import postFavoritesHandler from '../helpers/favorites/postFavoritesHandler';
import getFavoritesIdFileHandler from '../helpers/favorites/getFavoritesIdFileHandler';

// favoritesController contains request handlers for /favorites routes

const favoritesController = {
  postFavorites: async function (req: Request, res: Response) {
    try {
      const userPayload: FavoritesPayload = {
        listName: req.body.listName,
        ids: req.body.ids,
      };
      const data: FavoritesFilms = await postFavoritesHandler(userPayload);
      const list = Lists.create(data as any);
      await list.save();
      return res.status(200).json({
        status: true,
        payload: 'List was successfully added to database',
      });
    } catch (e) {
      return res.status(500).json({ status: false });
    }
  },
  getFavorites: async function (req: Request, res: Response) {
    try {
      const allFavorites = await Lists.find();
      const payload = allFavorites.map((value) => {
        return { id: value.id, listName: value.listName };
      });
      return res.status(200).json({ status: true, payload });
    } catch (e) {
      return res.status(500).json({ status: false });
    }
  },
  getFavoritesId: async function (req: Request, res: Response) {
    try {
      const payload = await Lists.findOneBy({
        id: req.params.id,
      });
      return res.status(200).json({ status: true, payload });
    } catch (e) {
      return res.status(500).json({ status: false });
    }
  },
  getFavoritesIdFile: async function (req: Request, res: Response) {
    try {
      const data = await Lists.findOneBy({
        id: req.params.id,
      });
      await getFavoritesIdFileHandler(data);
      res.download(
        path.join(__dirname, 'file.xlsx'),
        `${req.params.id}.xlsx`,
        function (err) {
          if (err) throw err;
          unlink(`${__dirname}/file.xlsx`, (err) => {
            if (err) throw err;
          });
        }
      );
    } catch (e) {
      return res.status(500).json({ status: false });
    }
  },
};

export default favoritesController;
