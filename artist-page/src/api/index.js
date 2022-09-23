import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQAU7TaWlVS2jawPum4MK7VHV0armPBejB5kBvPfTy7RwHQoRWkNH5jUSCP697ZPuTNNn1QGx9xpPitju5wbdcelUKp9xhzQjTpuWGxEL8mW7UO7A9Mftc-T70i6zKmcOm7qoI4ovaxe-HEHTF6fZsoTAUZDpF3DC3G-Up2GIN_Q6U8snaw2sG18xTV3vCYKi9Nw",
  },
});

export { api, apiSpotify };
