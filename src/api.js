

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchMovies = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return {};
  }
};

export const getMovieCast = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getImageUrl = (path) => {
  return `${IMAGE_BASE_URL}${path}`;
};
