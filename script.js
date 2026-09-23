// Aýdym faýlyny we başlanýan sekundyny kesgitleýäris
const audio = new Audio('copy_1D78BEEC-3576-4A52-BC73-736F7E45F238.mp3');
audio.loop = true;

let isPlayedOnce = false;

// Sahypadaky ilkinji basyşda aýdymy 11-nji sekuntdan başlatmak
document.addEventListener('click', function() {
  if (!isPlayedOnce && audio.paused) {
    audio.currentTime = 11;
    audio.play().then(() => {
      isPlayedOnce = true;
    }).catch(err => {
      console.log("Autoplay çäklendirildi:", err);
    });
  }
}, { once: true });
