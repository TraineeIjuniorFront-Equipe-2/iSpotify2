import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const token =
  "BQBniPbwxzhCpQOtpk3f80l5l7-BITbkjNe_MzKc-EWY0FEozvCPSI71Wk4U_i1FAva98ZDX7Fm_SH3MR2advB9AMQPujfPWK14s0lzN-JR06lQ4ht46GyziX-bQkLScnuXC2RoDFYJKKoG-2oCjhPwLY6jusvLFQBY_dyCvOo7HAY1C_OnnndPD3WqcxAVWFTtH";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { api, apiSpotify };
