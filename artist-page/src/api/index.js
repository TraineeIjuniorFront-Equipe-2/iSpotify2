import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQCJwemIWouYV6DIqV0lYFCQ5e7uHYVZgC3TQiOh0EzRw7GD9warp2oFKJIbn7HmeNQ2QVJS4AudcKSBrDD52xMBBmp7kj-n1gjteRG_8FUk71MV7r1Map9fTJHIICIG5c9tRW6x_A1F6M929GNYdj4ak9_DTrI13r7KHTRWBE_fitO4QWLSAuw9Enu-fgCS2_c4",
  },
});

export { api, apiSpotify };
