import express from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// API Route: Songs (iTunes API)
app.get("/api/songs", async (req, res) => {
  const response = await fetch("https://itunes.apple.com/search?term=pop&entity=song&limit=5");
  const data = await response.json();
  res.json(data);
});

// API Route: Videos (mock)
app.get("/api/videos", (req, res) => {
  res.json([
    { title: "Example Video 1" },
    { title: "Example Video 2" },
    { title: "Hook up YouTube API here" },
  ]);
});

// API Route: Podcasts
app.get("/api/podcasts", async (req, res) => {
  const response = await fetch("https://itunes.apple.com/search?term=technology&entity=podcast&limit=5");
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
