import defaultImg from '../images/default-opt.jpg';
const pathBaseUrl = 'https://image.tmdb.org/t/p/w342';

const formatData = ({
  poster_path,
  release_date,
  genres,
  vote_average,
  ...otherInfo
}) => {
  return {
    ...otherInfo,
    imgUrl: poster_path ? pathBaseUrl + poster_path : defaultImg,
    release_year: release_date ? release_date.slice(0, 4) : 'N/A',
    genresList: genres ? genres.map(elem => elem.name).join(', ') : '',
    score: vote_average * 10 + '%',
  };
};

export default formatData;