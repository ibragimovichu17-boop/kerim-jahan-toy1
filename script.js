// GitHub-a ýüklenilen aýdym faýly
const audio = new Audio('copy_1D78BEEC-3576-4A52-BC73-736F7E45F238.mp3');

// Sazyn gaýtalanyp durmagy üçin (loop)
audio.loop = true;

// Aýdymyň ozal 11-nji sekuntdan başlanyp-başlanmandygyny barlamak üçin
let isPlayedOnce = false;

// Sazy başlatmak ýa-da saklamak funksiýasy
function toggleMusic() {
  const musicBtn = document.getElementById("musicBtn");

  if (audio.paused) {
    // Eger ilkinji gezek açylýan bolsa, göni 11-nji sekuntdan başla
    if (!isPlayedOnce) {
      audio.currentTime = 11;
      isPlayedOnce = true;
    }
    
    audio.play();
    if (musicBtn) {
      musicBtn.innerHTML = "⏸️ Sazy sakla";
    }
  } else {
    audio.pause();
    if (musicBtn) {
      musicBtn.innerHTML = "🎵 Sazy başlat";
    }
  }
}

// Ulanyjy ekrana birinji gezek basanda aýdymy 11-nji sekuntdan awtomatiki başlatmak
document.addEventListener('click', function() {
  if (!isPlayedOnce && audio.paused) {
    audio.currentTime = 11;
    audio.play().then(() => {
      isPlayedOnce = true;
      const musicBtn = document.getElementById("musicBtn");
      if (musicBtn) {
        musicBtn.innerHTML = "⏸️ Sazy sakla";
      }
    }).catch(err => {
      console.log("Brauzer awtomatiki oýnatmagy çäklendirdi:", err);
    });
  }
}, { once: true });
