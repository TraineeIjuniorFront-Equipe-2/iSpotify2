import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token =
  "BQASb0X_rvgbaxzoD9mMazwVkHYP_UhgRxfvL1PkNR0Jo8TrFQCaVK99y8OdoGx5Fk-bhcTaU2BCf63vrw93eO7PbWTgJ2FP7YwP6PhxtTvx4hMqyVYjFlDTo_tMIHI2gMlsRT_kHIU6AFs3b0K27Tbx-1w0znqhJU-_Wl0oJLZrqX3xFYnRcwgI_oqlaypkzhTi";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };
