// frontend/src/api/getPlaylist.js
import axios from "axios";

export const getPlaylist = async (mood) => {
  const res = await axios.post("http://localhost:5000/api/playlist", { mood });
  return res.data.playlist;
};
