import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQD9k9_sRTMPbhxVgCSK0FmYeEszdH61Z3u-bRYyWV1yLOI77ayl2loom-9BFN4TFcl1a5I7LfcLzRhfwiw8cg4KA9QJinH8ON6hsPrFo8N9YLWLKuCF_DQUKwN6ijNia-i2oLrQL9-sGsMvIdkMuIUT7R9LjtrbdMi9-Z5lsmGxD3SIEwAZZzpAFPVT2s3agZx2",
  },
});

export { api, apiSpotify };
