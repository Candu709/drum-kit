function playSound(e) {
  const dataKey = `data-key="${e.keyCode}"`
  const audio = document.querySelector(`audio[${dataKey}]`)
  const key = document.querySelector(`div[${dataKey}]`)
  if (!audio) return;
  audio.currentTime = 0;
  audio.play()
  key.classList.add('playing')
}

function removePlaying(e) {
  if (e.propertyName === 'transform') this.classList.remove('playing')
}


const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend', removePlaying));
window.addEventListener('keydown', playSound);
