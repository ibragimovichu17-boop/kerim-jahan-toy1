// 1. Saz pleýerini dolandyrmak
const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');
const audio = document.getElementById('wedding-audio');

let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    musicIcon.classList.remove('fa-pause');
    musicIcon.classList.add('fa-music');
  } else {
    audio.play();
    musicIcon.classList.remove('fa-music');
    musicIcon.classList.add('fa-pause');
  }
  isPlaying = !isPlaying;
});

// 2. Toý gününe çenli sanag (Countdown)
// Toý gününi bu ýerde üýtgedip bilersiňiz:
const weddingDate = new Date("October 25, 2026 18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "<p class='text-xl text-rose-600 font-bold'>Toý güni geldi!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? '0' + days : days;
  document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 3. Forma doldurylanda maglumaty alanyňyzda (RSVP)
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('guest-name').value;
  const status = document.getElementById('guest-status').value;
  const count = document.getElementById('guest-count').value;

  alert(`Siziň jogabyňyz kabul edildi, sag boluň!\n\nAdy: ${name}\nKarary: ${status}\nAdam sany: ${count}`);
  
  this.reset();
});
