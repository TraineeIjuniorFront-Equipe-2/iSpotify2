import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQBENuQBo4PL5VM_-1ofL_D-HpSlpjgSWpY9bzPGvNIkv8c_QAdPbOdrDxVug2273JGC524ARVLClDkuQOYjn9tg9gOYsdJGzZGYVY1Q0hQiicnYNCcQSq_4wdD4keeKbfcX4StKoOf9uJvNOs3twFrI3zHMQpAuqHoxHLRc6aAVDZpqjZtjL7Q1SRcIbzQiAtul",
  },
});

export { api, apiSpotify };
