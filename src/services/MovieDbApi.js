import axios from 'axios';

const API_KEY = '989c90c59500ad26e3fa4e26d53d2bd3';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
    );
    return response.data.cast;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchMoviesUponRequest = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const movieDbApi = {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchCast,
  fetchReviews,
  fetchMoviesUponRequest,
};

export default movieDbApi;
