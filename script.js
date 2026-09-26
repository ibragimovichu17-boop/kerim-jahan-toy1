<script>
  // 1. AOS (ANIMATE ON SCROLL) ANIMASIÝASYSYNY BAŞLATMAK
  AOS.init({ 
    once: false, 
    duration: 1000,
    easing: 'ease-out-cubic'
  });

  // ELEMENDLERY ÇEKIŞDIRMEK
  const overlay = document.getElementById('envelope-overlay');
  const audio = document.getElementById("wedding-audio");
  const musicIcon = document.getElementById("music-icon");
  const musicBtn = document.getElementById("music-btn");

  let isOpened = false;

  // 2. AÝDYMY OÝNATMAK FUNKSIÝASY
  function playAudio() {
    if (audio.paused) {
      audio.play().then(() => {
        musicIcon.classList.remove("fa-music");
        musicIcon.classList.add("fa-pause");
      }).catch(e => {
        console.log("Brauzer awtomatiki sesi saklady, ulanyjynyň degmegini soraýar:", e);
      });
    }
  }

  // 3. KONWERTE (ENVELOPE OVERLAY) BASYLANDA AÇYLMAK WE AÝDYMY BAŞLATMAK
  overlay.addEventListener('click', () => {
    if (isOpened) return;
    isOpened = true;

    // Aýdymy oýnatmak
    playAudio();

    // Konwerti açmak animasiýasy
    overlay.classList.add('opened');

    // Animasiýalary täzelemek
    setTimeout(() => {
      AOS.refresh();
    }, 600);
  });

  // 4. SAHYPA ÝA-DA EKRANA ILKINJI GEZEK DEGLENDE AÝDYMY BARIŞDYRMAKO (AUTOPLAY BACKUP)
  document.addEventListener('click', () => {
    if (audio.paused && isOpened) {
      playAudio();
    }
  }, { once: true });

  // 5. SAZ PLAY / PAUSE DÜWMESI
  musicBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Konwertiň event-ine päsgel bermezlik üçin
    
    if (audio.paused) {
      isOpened = true;
      playAudio();
    } else {
      audio.pause();
      musicIcon.classList.remove("fa-pause");
      musicIcon.classList.add("fa-music");
    }
  });

  // 6. TOÝ GÜNÜNE ÇENLI WAGT SANAÝJY (COUNTDOWN)
  const weddingDate = new Date("October 17, 2026 18:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days < 10 ? "0" + days : days;
      document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
      document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
      document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    } else {
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
    }
  }

  // Yza wagt sanaýjyny her 1 sekuntdan täzelemek
  setInterval(updateCountdown, 1000);
  updateCountdown();
</script>
