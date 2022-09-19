import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQAY3tMQ270xkNQf563KhOIEpvQpYfOpmUe0Jnoc3FDM_zdKQB81d77SMcjqp2MJ1-X2ZioUwS1eBxudCcut_8CGXtCAVsVXUjrqyoGQfAu9Zc2QKIBI0YtIrYaxf1fxQfEKvkyGCRqKPvDANabtZSHherEIriuzCrAMlK3sNBH3M-KWxhCDwWHFZP0",
  },
});

export { api, apiSpotify };
