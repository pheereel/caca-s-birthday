const lagu = new Audio('./audio/tulus.mp3')
const button = document.querySelector('#ctrlIcon')

function playmusic() {
    if (lagu.paused) {
      lagu.play();
      // Ganti ikon ke Pause
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      lagu.pause();
      // Ganti ikon balik ke Play
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
}

button.addEventListener("click", playmusic)