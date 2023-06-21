const keys = Array.from(document.querySelectorAll('.key'));

function playAudio(key){
    const audio = document.querySelector(`audio[data-key='${key}']`);
    if(!audio)
        return;
    audio.currentTime = 0; // rewind to start
    audio.play();
}

function removeTransition(e){
    if(!(e.propertyName === 'transform'))
        return;
    this.classList.remove('playing');
}

function handleKeys(el){
    const key = el.dataset.key;
    playAudio(key);
    el.classList.add('playing');
}

function handleKeyup(e){
    const pressedDiv = keys.find(key => key.dataset.key == e.keyCode);
    
    if(!pressedDiv)
        return;
    handleKeys(pressedDiv);
}

keys.forEach(key => {
    key.addEventListener('click', (e) => handleKeys(e.currentTarget));
    key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keyup', handleKeyup);