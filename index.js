fetch("/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("site-nav").innerHTML = data;
  })
  .catch(err => console.error("Navbar failed to load:", err));