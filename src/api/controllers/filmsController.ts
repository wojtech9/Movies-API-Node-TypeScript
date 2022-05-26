import { Request, Response } from 'express';
import axios from 'axios';
import Film from '../interfaces/getFilm.interface';
import filterData from '../helpers/films/filterData';

// filmController contains request handlers for /films routes

import fetchDetails from '../helpers/favorites/postFavoritesHandler';

const filmsController = {
  getFilms: async function (req: Request, res: Response) {
    try {
      const { data } = await axios.get('https://swapi.dev/api/films/');
      const filteredData: Film[] = filterData(data);
      return res.status(200).json({ status: true, payload: filteredData });
    } catch (e) {
      return res.status(500).json({ status: false });
    }
  },
};

export default filmsController;
