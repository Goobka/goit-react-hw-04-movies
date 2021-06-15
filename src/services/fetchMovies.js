import axios from 'axios';

const key = '9c8d439d1b89eedd1730750924a6446b';

const requestMovieDetails = movieId => {
  const requestStr = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&append_to_response=reviews,credits`;
  return request(requestStr);
};
const requestTrendMovies = () => {
  const requestStr = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language='en-US'`;
  return request(requestStr);
};
const requestSearchMovie = query => {
  const requestStr = `https://api.themoviedb.org/3/search/movie?api_key=${key}&page=1&query=${query}&language='en-US'`;
  return request(requestStr);
};

const request = async requestStr => {
  const fetchResult = await axios
    .get(requestStr)
    .then(res => res.data)
    .catch(console.error);
  return fetchResult;
};

const fetchMovies = {
  requestMovieDetails,
  requestTrendMovies,
  requestSearchMovie,
};

export default fetchMovies;




