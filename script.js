overlay.addEventListener('click', () => {
  if (isOpened) return;
  isOpened = true;

  if (audio.paused) {
    // Aýdymy 11-nji sekunda geçirýäris
    audio.currentTime = 11;
    audio.play().then(() => {
      musicIcon.classList.remove("fa-music");
      musicIcon.classList.add("fa-pause");
    }).catch(e => console.log("Audio play error:", e));
  }

  overlay.classList.add('opened');

  setTimeout(() => {
    AOS.refresh();
  }, 600);
});

musicBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (audio.paused) {
    isOpened = true;
    // Eger aýdym täze başlanýan bolsa 11-nji sekuntdan başlatsyn
    if (audio.currentTime < 11) {
      audio.currentTime = 11;
    }
    audio.play();
    musicIcon.classList.remove("fa-music");
    musicIcon.classList.add("fa-pause");
  } else {
    audio.pause();
    musicIcon.classList.remove("fa-pause");
    musicIcon.classList.add("fa-music");
  }
});
