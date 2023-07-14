const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Initialize an empty playlist array
let playlist = [
  {
    title: "夜に駆ける",
    artists: "YOASOBIO",
    url: "https://music.youtube.com/watch?v=by4SYYWlhEs&feature=share",
  },
];

// Add a song to the playlist
app.post("/playlist/add", (req, res) => {
  const { title, artists, url } = req.body;
  const song = { title, artists, url };
  playlist.push(song);
  res.json({ message: "Song added to the playlist" });
});

// Play a song from the playlist
app.get("/playlist/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < playlist.length) {
    const song = playlist[index];
    res.json(song);
  } else {
    res.status(404).json({ message: "Song not found" });
  }
});

// Get the list of songs in the playlist
app.get("/playlist", (req, res) => {
  res.json(playlist);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
