const API_KEY = 'f9a04c33408baaf0896c3ad788b9cdac' // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchPopularMovies = () =>
  fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
export const fetchTopRatedMovies = () =>
  fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
export const fetchUpcomingMovies = () =>
  fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
export const fetchMovieDetails = movieId =>
  fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
export const fetchMovieCredits = movieId =>
  fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
export const searchMovies = query =>
  fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
