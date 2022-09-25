import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQAUTpNutwVWm9zoLnRS3xZjihqtv3HCRv04k_7Wnt9wYImMWH2_pmWjZRUXtE5YgoASF9cHGLFOyezPz28tXsjexFhRFyAUoxa3bDi38UmnPt3DTm25fWMn8aFA8nR4UPw4-0Qpq6Hi8G3R_1zCMN14AleYeoxAdHzDngC-L9UsNdnG_V7Ucqrmkj0xLqlaMnvU",
  },
});

export { api, apiSpotify };
