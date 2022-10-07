import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQCEX2Lzuk4Z9-rIin3olEvWQ7VklAI7S4bKQccpOZ8cNYc8ZWiYzx62MLqj8DysVdCKDqcXihQEnex5thvRFzg3FeV-IbduhyFQgBB_nNL_cNQgfnWncLEgVzGEJEawhkiVYFc6Kb0EOtfEmej0V6RIIFr3_ZpQu5ZLUEtv_1bGrhNj4hIhpqj-lRUpxtG0-d0Z",
  },
});

export { api, apiSpotify };
