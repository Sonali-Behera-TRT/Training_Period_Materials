const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hour-hand');

function setTime(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    if(
        seconds === 0 || 
        minutes === 0 || 
        hours === 0
    )
        secHand.style.transition = "none";

    secHand.style.transform = `rotate(${seconds * 6 + 90}deg)`;
    minHand.style.transform = `rotate(${minutes * 6 + 90}deg)`;
    hrHand.style.transform = `rotate(${hours * 30 + 90}deg)`;
}

setInterval(setTime, 1000);