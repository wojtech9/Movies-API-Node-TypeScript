import Film from '../../interfaces/getFilm.interface';

// function creates table, which contains specific data

const filterData = (data: any): Film[] => {
  return data.results.map((value: any) => {
    return {
      release_date: value.release_date,
      title: value.title,
      episode_id: value.episode_id,
    };
  });
};

export default filterData;
