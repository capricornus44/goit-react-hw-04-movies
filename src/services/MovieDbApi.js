import axios from 'axios';

const API_KEY = '989c90c59500ad26e3fa4e26d53d2bd3';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

const fetchMovieDetails = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

const fetchCast = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => response.data.cast);
};

const fetchReviews = movieId => {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(response => response.data.results);
};

const fetchMoviesUponRequest = query => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};

export default {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchCast,
  fetchReviews,
  fetchMoviesUponRequest,
};
