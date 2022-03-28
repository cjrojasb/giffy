const apiKey = 'Cph6H7O9nTfDW9MU152MVnMo9YAbJveE';

export function getTrendingGifs() {
  const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
}

export function getGifs({ keyword = 'bodybuilding' } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&rating=g`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
}

export function getGif(id) {
  const apiUrl = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
}
