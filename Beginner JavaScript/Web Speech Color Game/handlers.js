import { isValidColor } from "./colors";

function logSpeech(results){
    console.log();
}

export function handleResult({results}){
    const words = results[results.length - 1][0].transcript;
    
    let color = words.toLowerCase();
    color = color.replace(/\s/g, '');

    if(!isValidColor(color))
        return;
    const span = document.querySelector(`.${color}`);
    span.classList.add('got');
    document.body.style.background = color;
}