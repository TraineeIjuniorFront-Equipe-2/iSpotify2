import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQAD7-9qO9jFolPZXf4HYmASrtkyzQJdXhuVUXfDCOFioM0s_lMIAAS-W6pTlWS7b_nnP6pWnC0JdymPA0M2mqijmHeUgnb26iVJFGlIUbfZeeed6s8QMFnub8nxEwpTkOAlorpJu_25bK0YSEQ7RTBeoCwuAKYWtStEvUvZdcgzzQRH0621Sg",
  },
});

export { api, apiSpotify };
