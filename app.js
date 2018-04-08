// Add keydown event listener to play sound
window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
// Loop thru nodeList and add event listener to remove transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// PLAY SOUND func
function playSound(e) {
  // init vars
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // check if keydown coresponds with a drum kit key
  if (audio) {
    // if audio is defined, play sound and add effect
    audio.currentTime = 0;  // rewind to start, allows for succession
    audio.play();
    key.classList.add('playing');
  } else {
    // if audio null, exit function
    return;
  }
}

// REMOVE TRANSITION func
function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    return;
  } else {
    this.classList.remove('playing');
  }
}
