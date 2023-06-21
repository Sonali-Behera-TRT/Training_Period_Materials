const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

async function getVideo(){
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).catch(err => {
        console.log('OH NO!!!!', err);
    });
    
    video.srcObject = stream;
    video.play();
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(video, 0, 0, width, height);

    // get the image-data obj that contains pixel data for the specified rectangle on a canvas
    let pixels = ctx.getImageData(0, 0, width, height);
    //pixels = redEffect(pixels);
    //pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);

    ctx.putImageData(pixels, 0, 0);
    //ctx.globalAlpha = 1;

    requestAnimationFrame(paintToCanvas);
}

function redEffect(pixels){
    for(let i = 0; i < pixels.data.length; i += 4){
        pixels.data[i + 0] += 200;
        pixels.data[i + 1] += 50;
        pixels.data[i + 2] *= 0.5;
    }

    return pixels;
}

function rgbSplit(pixels){
    for(let i = 0; i < pixels.data.length; i += 4){
        pixels.data[i - 150] = pixels.data[i + 0];
        pixels.data[i + 150] = pixels.data[i + 1];
        pixels.data[i -550] = pixels.data[i + 2];
    }
    return pixels;
}

function greenScreen(pixels){
    const levels = {};

    document.querySelectorAll('.rgb input').forEach(input => {
        levels[input.name] = input.value;
    });

    for(let i = 0; i <= pixels.data.length; i += 4){
        const red = pixels.data[i + 0];
        const green = pixels.data[i + 1];
        const blue = pixels.data[i + 2];
        const alpha = pixels.data[i + 3];

        if(
            red >= levels.rmin && 
            red <= levels.rmax && 
            green >= levels.gmin && 
            green <= levels.gmax && 
            blue >= levels.bmin && 
            blue <= levels.bmax
        )
            pixels.data[i + 3] = 0;
    }
    
    return pixels;
}

function takePhoto(){
    snap.currentTime = 0;
    snap.play();
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'pretty');

    link.innerHTML = `<img src = ${data} alt = "Pretty Girl">`;
    strip.insertBefore(link, strip.firstChild);
}

getVideo();
video.addEventListener('canplay', paintToCanvas);