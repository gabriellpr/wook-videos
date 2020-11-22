import axios from "axios";
const Key = "AIzaSyCtFxbHpG4hs1R1e4mfLyw_ywi4ffCsdKQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: Key,
  },
});
