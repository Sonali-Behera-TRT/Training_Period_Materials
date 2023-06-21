import { handleResult } from "./handlers";
import { colorsByLength, isDark } from "./colors";

const colorsEl = document.querySelector('.colors');

function displayColors(colors){
    return colors.map(color => {
        return `
        <span class="color ${color} ${isDark(color) ? 'dark': ''}" style="background: ${color}">${color}</span>
        `;
    }).join(' ');
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start(){
    // check if browser supports SpeechRecognition or not
    if(!('SpeechRecognition' in window)){
        console.log(`Sorry, your browser doesn't support speech recognition`);
        return;
    }
    console.log('Starting...');

    const recognition = new SpeechRecognition();
    // The recognizer should recognize the speech continuosly and should not stop
    recognition.continuous = true;
    // Recognizer should not wait for the speech to complete, can give output in between of the speech
    recognition.interimResults = true;
    recognition.addEventListener('result', handleResult)
    recognition.start();
}

colorsEl.innerHTML = displayColors(colorsByLength);


start();