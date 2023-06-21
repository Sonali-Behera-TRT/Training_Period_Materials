const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".shake");
const MOVE_AMOUNT = 10;
let hue = 0;

const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
	ctx.beginPath();
	ctx.moveTo(x, y);

    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	switch (key) {
		case "ArrowUp":
			y -= MOVE_AMOUNT;
			break;
		case "ArrowDown":
			y += MOVE_AMOUNT;
			break;
		case "ArrowLeft":
			x -= MOVE_AMOUNT;
			break;
		case "ArrowRight":
			x += MOVE_AMOUNT;
			break;
		default:
			break;
	}

	ctx.lineTo(x, y);
	ctx.stroke();
}

function handleKey(event) {
	const key = event.key;
	if (key.includes("Arrow")) {
		event.preventDefault();
		const options = {
			key: key,
		};
		draw(options);
	}
}

function clearCanvas(){
    ctx.clearRect(0, 0, width, height);
    canvas.classList.add('shake');
    canvas.addEventListener('animationend', function (){
        canvas.classList.remove('shake');
    }, {once: true});
}

window.addEventListener("keydown", handleKey);
shakeButton.addEventListener('click', clearCanvas);