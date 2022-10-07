import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQDVgKu3e8Bz5qZMdQQ5swzCiwd1Ert3EOo9dDeg8VyCZpOr37EiTF0m_PGo9OSCF1NtZCXtIcvccy258xXEnx6kM_ryivS0E1WTuYpyei4205r268NeKnVaJdIy6BlFSc0csOyyWwOMh_JpPOfvL0eh2UX_bXz55yNPuqdujHZSx3emFo7NYCqFvhPS0jt9MOPD",
  },
});

export { api, apiSpotify };
