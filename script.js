const lagu = new Audio('./audio/tulus.mp3')
const spotifybutton = document.querySelector('.spotify-btn')
const button = document.querySelector('#ctrlIcon')

function playmusic() {
    if (lagu.paused) {
      lagu.play();
      // Ganti ikon ke Pause
      button.classList.remove("fa-play");
      button.classList.add("fa-pause");
    } else {
      lagu.pause();
      // Ganti ikon balik ke Play
      button.classList.remove("fa-pause");
      button.classList.add("fa-play");
    }
}

spotifybutton.addEventListener("click", playmusic)