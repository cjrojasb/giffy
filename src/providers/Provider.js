import { API_KEY, API_URL } from './settings';

export function getTrendingSearches() {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
}

export function getTrendingGifs() {
  const apiUrl = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
}

export function getGifs({
  limit = 5,
  keyword = 'bodybuilding',
  page = 0,
} = {}) {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
}

export function getGif(id) {
  const apiUrl = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
}
