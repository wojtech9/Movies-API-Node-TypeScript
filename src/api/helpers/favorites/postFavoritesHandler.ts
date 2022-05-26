import axios from 'axios';
import FavoritesPayload from '../../interfaces/favoritesPayload.interface';

// function which fetch details of favorites films

const postFavoritesHandler = async ({ listName, ids }: FavoritesPayload) => {
  /* SWAPI doesn't return specific film by typing specific id in req url
    for example. https://swapi.dev/api/films/1 returns film with ID 4
    
  So, I came up with my own solution
  */

  const favoritesItems = [];
  const newList: any = [];
  const { data } = await axios.get(`http://localhost:3000/films`);
  ids.forEach((value) => {
    data.payload.forEach((value2: any, index2: number) => {
      if (value2.episode_id === value) newList.push(index2 + 1);
    });
  });

  // fetching all film's details

  for await (const value of newList) {
    const filmDetails = await axios.get(
      `https://swapi.dev/api/films/${value}/`
    );
    favoritesItems.push(filmDetails.data);
  }

  // preparing element, which will be saved in database

  const release_dates: string[] = [];
  const titles: string[] = [];
  let characters: string[] = [];

  // filter function
  let uniq = (a: string[]) => [...new Set(a)];

  favoritesItems.forEach((value) => {
    release_dates.push(value.release_date);
    titles.push(value.title);
    characters = characters.concat(value.characters);
  });

  // filter characters

  characters = uniq(characters);

  return {
    listName,
    release_dates,
    titles,
    characters,
  };
};

export default postFavoritesHandler;
