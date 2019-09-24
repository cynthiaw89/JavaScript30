
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops function
    audio.currentTime = 0; //rewinds audio
    audio.play(); //plays sound
    key.classList.add('playing'); //animation
}
function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip if not transform
    this.classList.remove('playing');
}
// Listen for keydown event
window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key=> key.addEventListener('transitionend', removeTransition));

