// Fetch Songs from iTunes API
async function fetchSongs() {
  const res = await fetch("/api/songs");
  const data = await res.json();
  document.getElementById("songs").innerHTML =
    data.results.map(song => `<p>${song.trackName} by ${song.artistName}</p>`).join("");
}

// Fetch Videos (Mock data for now)
async function fetchVideos() {
  const res = await fetch("/api/videos");
  const data = await res.json();
  document.getElementById("videos").innerHTML =
    data.map(v => `<p>${v.title}</p>`).join("");
}

// Fetch Podcasts
async function fetchPodcasts() {
  const res = await fetch("/api/podcasts");
  const data = await res.json();
  document.getElementById("podcasts").innerHTML =
    data.results.map(pod => `<p>${pod.collectionName}</p>`).join("");
}
