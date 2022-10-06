import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQAQjSXhBD2qi70GRd6kVhvgmj95j22MVoEHM16hpeHBkBJE7ZvJ_6O9SdIAe2CrVNye1-aCNs4DIfmL3o4h1-TjRKx4j473oARA8UmSrElIVHhsnqNELo9wNX53--46jpDn0vtPMeURPHIrd6S46AZHCwwOYc5z8KwJpbLcEItkFaQVte8P6Q",
  },
});

export { api, apiSpotify };
