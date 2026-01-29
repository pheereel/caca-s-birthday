const lagu = document.querySelector('#mySong')
const button = document.querySelector('#ctrlIcon')

function playmusic() {
    if (song.paused) {
      song.play();
      // Ganti ikon ke Pause
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      song.pause();
      // Ganti ikon balik ke Play
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
}