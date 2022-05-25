import { Request, Response } from 'express';
import axios from 'axios';
import Film from '../interfaces/film.interface';

// filmController contains request handlers for /films routes

const filmsController = {
  getFilms: async function (req: Request, res: Response) {
    try {
      const { data } = await axios.get('https://swapi.dev/api/films/');
      const filteredData: Film[] = data.results.map((value: any) => {
        return {
          release_date: value.release_date,
          title: value.title,
          episode_id: value.episode_id,
        };
      });
      return res.status(200).json({ status: true, filteredData });
    } catch (e) {
      return res.status(500).json({ status: false });
    }
  },
};

export default filmsController;
