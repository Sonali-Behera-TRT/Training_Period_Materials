import { fetchJokes } from "./index.js";
import { loader, jokeButtonSpan, jokeHolder } from "./elements.js";
import { getRandomItemFromArray } from "./util.js";
import buttonText from '../data/buttonText.js';

// named export
export async function handleClick() {
    const {joke} = await fetchJokes(loader);
    jokeHolder.textContent = joke;
  
    jokeButtonSpan.textContent = getRandomItemFromArray(buttonText, jokeButtonSpan.textContent);
}