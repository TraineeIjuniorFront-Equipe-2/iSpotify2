import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  withCredentials: true,
});

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQDWqVho3nReKAQ7eNujJEeSVrTFmyloeR4hqoSY-2TmXbXSB-T9w1h0K5O4Xeueim7_DqS-FXPEEhByFgcrkNPzGnW3O44_o_CyE0adwE2PIFGgpwkIz-dkXV1uC-iqD28xyRJprw70y1MEGi86ShVn34RsJG77SWBvUUAqwZxXGWg4WXx5iOe7Y6CKnfSPnKZh",
  },
});

export { api, apiSpotify };
