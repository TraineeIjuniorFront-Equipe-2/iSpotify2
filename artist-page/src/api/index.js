import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token =
  "BQAKaRJtdQkM9DqUl2YZ0aB9PmM3k8zc_ozZL4XwBllntMmFCu5YPR6ou3FIC2wXpmv5r43u9Gn1ennP2v0RT662zAeUAGnXySofQaJQpkRj3KU3CLcnUo-7gfB66ENpyiBV6JEEQozm4tycU7PLeMaD3s1RRniIxOJY9ZFC1-gcHpdyhAdPWA";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };
