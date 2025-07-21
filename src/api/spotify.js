import axios from "axios";

// Ganti dengan Spotify Client ID dan Secret dari dashboard kamu
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

// Cache token biar gak request terus
let accessToken = null;
let tokenExpiration = null;

async function getAccessToken() {
  // Jika token masih valid, pakai yang lama
  if (accessToken && tokenExpiration && new Date() < tokenExpiration) {
    return accessToken;
  }

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
      },
    }
  );

  accessToken = response.data.access_token;
  // Expire token dalam 1 jam
  tokenExpiration = new Date(new Date().getTime() + 3600 * 1000);

  return accessToken;
}

export async function fetchSpotifyTracks(query) {
  try {
    const token = await getAccessToken();

    const res = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: query,
        type: "track",
        limit: 5,
      },
    });

    return res.data.tracks.items.map((track) => ({
      title: track.name,
      artist: track.artists.map((a) => a.name).join(", "),
      id: track.id,
      preview_url: track.preview_url, // optional: untuk audio player
    }));
  } catch (error) {
    console.error("Error fetching Spotify tracks:", error);
    return [];
  }
}
