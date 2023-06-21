import { client } from "@gradio/client";

const results = document.querySelector('#results');
const button = document.querySelector('#photo');

async function run(reader) {
	const img = JSON.stringify({ "data": [reader.result] });
	const app = await client("https://sonali-behera-bear-breed-classifier.hf.space/");
	const result = await app.predict(
		"/predict", 
		[img]
	);

	result?.data.forEach(item => {
		const label = item.label;
		const confidence = item.confidences[0].confidence;
		const div = document.createElement('div');
		const p = `
		<img style="height: 200px; width: 200px; margin-top: 10px" src=${reader.result} alt="${label} bear"/>
		<p>It's a ${label} bear with a confidence of ${Number(confidence).toFixed(3)}</p>
		`;

		div.innerHTML = p;
		results.appendChild(div);
	})
}

button.addEventListener('input', () => {
	for(let i = 0; i < button.files.length; i++){
		const reader = new FileReader();
		reader.addEventListener('load', () => run(reader));
		reader.readAsDataURL(button.files[i]);
	}
})