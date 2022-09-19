import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQC-5XUZEVyhphs7ze4vUdNCMJLJ79yKCSTfBVPO35pd1luTi6reFX5y764ueub9T9omnL6VkVyE_K4oggYZN62N3mY0juhW_MiqEnPpdWINNmWlP8jpnUKsudUWN0xDwNNlr9FFit0iUNIiAqrvQ8lPI-Pi3j1jNzAtSCqTaWQLRKw16RC__JeYrkQ",
  },
});

export { api, apiSpotify };
