const btn = document.getElementById("btn");
const music = document.getElementById("music");

function toggleSound() {
  if (music.paused) {
    music.play();
    btn.innerHTML = "Pause";
  } else {
    music.pause();
    btn.innerHTML = "Play Music";
  }
}

console.log(music);
