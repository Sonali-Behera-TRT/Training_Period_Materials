function getRandomNumber(min = 20, max = 150, random = Math.random()){
    return Math.floor(random * (max - min) + min);
}

function wait(ms){
    return new Promise(res => {
        setTimeout(res, ms);
    });
}

// async function draw(ele){
//     const text = ele.textContent;
//     let soFar = '';
//     const {typeMin, typeMax} = ele.dataset;
//     for(letter of text){
//         soFar += letter;
//         ele.textContent = soFar;
//         const timeToWait = getRandomNumber(typeMin, typeMax);
//         await wait(timeToWait);
//     }
// }

function draw(ele){
    const text = ele.textContent;
    let index = 1;
    const {typeMin, typeMax} = ele.dataset;
    console.log(text.length);

    async function drawLetter(){
        if(index === text.length + 1)
            return;

        ele.textContent = text.slice(0, index);
        index++;
        const timeToWait = getRandomNumber(typeMin, typeMax);
        await wait(timeToWait);
        drawLetter();
    }
    drawLetter();
}

const elements = document.querySelectorAll('[data-type]');

elements.forEach(draw);