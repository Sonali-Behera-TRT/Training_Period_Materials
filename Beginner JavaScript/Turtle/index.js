const turtle = document.querySelector('.turtle');
let x = 0;
let y = 0;
let flipped = false;
let rotate = 0;
const speed = 10;

function handleKeyDown(event){
    const key = event.key;
    if(!key.includes('Arrow')) return;
    
    switch(key){
        case 'ArrowUp': 
            y -= 1;
            rotate = -90;
            break;
        case 'ArrowDown': 
            y += 1;
            rotate = 90;
            break;
        case 'ArrowLeft': 
            x -= 1;
            rotate = 0;
            flipped = true;
            break;
        case 'ArrowRight': 
            x += 1;
            rotate = 0;
            flipped = false;
            break;
    }
    console.log(x, y);
    turtle.setAttribute('style', `
        --x: ${x * 10}px;
        --y: ${y * 10}px; 
        --rotateX: ${flipped ? '180deg' : '0'};
        --rotate: ${rotate}deg;
        `);
}
window.addEventListener('keydown', handleKeyDown);