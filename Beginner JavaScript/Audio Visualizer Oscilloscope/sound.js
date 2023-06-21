import { hslToRgb } from "./utils";

const canvas = document.querySelector('canvas');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const ctx = canvas.getContext('2d');
ctx.width = WIDTH;
ctx.height = HEIGHT;

let analyzer;
let bufferLength;

function handleError(err){
    console.log('You must give access to your mic in order to proceed');
}

async function getAudio(){
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
    });

    const audioCtx = new AudioContext();
    // expose audio time and freq data and create data visualization
    analyzer = audioCtx.createAnalyser();
    // creates an source-node obj from the stream that the analyzer can analyse
    const source = audioCtx.createMediaStreamSource(stream);
    // source is connected to the analyzer to analyse the audio
    source.connect(analyzer);

    // how much data we should collect
    analyzer.fftSize = 2 ** 10;
    bufferLength = analyzer.frequencyBinCount;
    const timeData = new Uint8Array(bufferLength);

    const frequencyData = new Uint8Array(bufferLength);
    drawTimeData(timeData);
    drawFrequency(frequencyData);
}

function drawTimeData(timeData){
    //inject the current time data into the timeData array
    analyzer.getByteTimeDomainData(timeData);

    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    //draw into canvas
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ffc600';
    ctx.beginPath();
    
    const sliceWidth = WIDTH / bufferLength;
    let x = 0;

    timeData.forEach((data, i) => {
        const v = data / 128;
        const y = (HEIGHT * v) / 2;
        if(i === 0)
            ctx.moveTo(x, y);
        else 
            ctx.lineTo(x, y);

        x += sliceWidth;
    });
    ctx.stroke();

    requestAnimationFrame(() => drawTimeData(timeData));
}

function drawFrequency(frequencyData){
    analyzer.getByteFrequencyData(frequencyData);
    
    const barWidth = (WIDTH / bufferLength) * 2.5;
    let x = 0;

    frequencyData.forEach(amount => {
        const percent = amount / 255;
        const barHeight = (HEIGHT * percent) / 2;
        const [h, s, l] = [360 / (percent * 360) - 0.5, 0.8, 0.5];
        const [r, g, b] = hslToRgb(h, s, l);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        
        x += 2;
    });

    requestAnimationFrame(() => drawFrequency(frequencyData));
}

getAudio();