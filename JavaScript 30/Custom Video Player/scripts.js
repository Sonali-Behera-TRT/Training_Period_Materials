// Select elements
const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const progress = player.querySelector('.progress');
const progressBar = progress.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullScreenButton = player.querySelector('.full__screen');

// handle funcationalities
function handleVideoClick(){
    video.paused ? video.play(): video.pause();
}

function handleToggle(){
    const icon = video.paused ? '►' : '❚ ❚'
    toggle.textContent = icon;
}

function handleRange(){
    video[this.name] = this.value;
}

function skip(){
    video.currentTime += Number(this.dataset.skip);
}

function scrub(e){
    const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
    video.currentTime = scrubTime;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function handleChangeScreen(){
    document.fullscreenElement ? document.exitFullscreen() : player.requestFullscreen()
}

function handleChangeInFullScreenButton(){
    fullScreenButton.textContent = document.fullscreenElement ? '⇲' : '⇱';
}

// add event listeners
let isPressed = false;
video.addEventListener('click', handleVideoClick);
toggle.addEventListener('click', handleVideoClick);
video.addEventListener('play', handleToggle);
video.addEventListener('pause', handleToggle);
video.addEventListener('timeupdate', handleProgress);

ranges.forEach(range => {
    range.addEventListener('change', handleRange);
})

skipButtons.forEach(button => {
    button.addEventListener('click', skip);
})

progress.addEventListener('click', scrub);

progress.addEventListener('mousedown', () => isPressed = true);
progress.addEventListener('mouseup', () => isPressed = false);
progress.addEventListener('mouseout', () => isPressed = false);
progress.addEventListener('mousemove', (e) => isPressed && scrub(e));

fullScreenButton.addEventListener('click', handleChangeScreen);

player.addEventListener('fullscreenchange', handleChangeInFullScreenButton)