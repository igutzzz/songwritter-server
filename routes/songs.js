import supabase from "../supabaseConfig.js";
import {
  deleteSong,
  getSongs,
  postSong,
  updateSong,
} from "../controllers/SongsController.js";

export default async function SongRoutes(server) {
  server.get("/", getSongs);
  server.post("/song", postSong);
  server.put("/song/:params", updateSong);
  server.delete("/song/:params", deleteSong);
}
