import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token =
  "BQDCYOnQDXAMWY-aKY-Qmt-1MqRm7LDtAO0htLQulOksyu0-3iXnmLi0wgQn6dQ7RtSM_dC10Uz2Yl1bWMML-5rPoRYFz-0SpauoA-8lRT-JVJ1rSbjgR_Lf1Z9Ieg1vpOUDoJFCCNKWZWW3DJU-QtpsaNzzWlAtODbnMJuA8jYVIgW749CsDdGAWxNBvjwtxtMT";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };
