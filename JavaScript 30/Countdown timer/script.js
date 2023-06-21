let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');

function timer(seconds){
    clearInterval(countDown);
    // timestamp in ms
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    
    countDown = setInterval(() => {
        let secondsLeft = Math.round((then - Date.now()) / 1000);

        secondsLeft = (secondsLeft === -0) ? 0 : secondsLeft;

        if(secondsLeft < 0){
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds){
    const min = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const display = `${min}:${(secondsLeft < 10) ? '0' : ''}${secondsLeft}`;
    
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour % 12 : hour;
    const min = end.getMinutes();
    
    endTime.textContent = `Be back at ${adjustedHour}:${(min < 10) ? '0' : ''}${min}`;
}

function startTimer(){
    const time = Number(this.dataset.time);
    timer(time);
}

function handleSubmit(e){
    e.preventDefault();
    const min = this.minutes.value;
    timer(min * 60);
    this.reset();
}

buttons.forEach(button => {
    button.addEventListener('click', startTimer);
})

document.customForm.addEventListener('submit', handleSubmit);