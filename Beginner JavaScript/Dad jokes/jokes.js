const jokeButtonSpan = document.querySelector('button.getJoke span');
const jokeHolder = document.querySelector('.joke p')
const loader = document.querySelector('.loader');

const buttonText = [
    'Ugh.',
    '🤦🏻‍♂️',
    'omg dad.',
    'you are the worst',
    'seriously',
    'stop it.',
    'please stop',
    'that was the worst one',
];

function getRandomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  
  if(item === not){
    console.log('repeated');
    return getRandomItemFromArray(arr, not);
  }

  return item;
}

async function fetchJokes() {
const response = await fetch('https://icanhazdadjoke.com/', {
headers: {
  Accept: 'application/json'
}
});
const data = await response.json();
return data;
}

async function handleClick() {
  loader.classList.remove('hidden');
  const {joke} = await fetchJokes();
  jokeHolder.textContent = joke;

  jokeButtonSpan.textContent = getRandomItemFromArray(buttonText, jokeButtonSpan.textContent);
  loader.classList.add('hidden');
}

jokeButtonSpan.addEventListener('click', handleClick);