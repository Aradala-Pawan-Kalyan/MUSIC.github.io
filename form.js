const audio = document.getElementById("audio");
const playButton = document.querySelector(".play-button");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Pause";
  } else {
    audio.pause();
    playButton.textContent = "Play";
  }
}