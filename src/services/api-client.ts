import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "ad53d8d0e25841bb8d417116ea0e6b68",
  },
});
