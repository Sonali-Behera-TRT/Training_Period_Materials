import wait from "waait";
import {faker} from "@faker-js/faker";
import {formatDistance, format} from 'date-fns';
import axios from "axios";
import {intersection, eq, isEqual, reject} from 'lodash';
import to from 'await-to-js';

async function getFakePerson(){
    const name = document.createElement('h1');
    const image = document.createElement('img');

    const avatar = faker.image.avatar();
    const fName = await faker.name.firstName();
    const lName = await faker.name.lastName();

    name.textContent = `${fName} ${lName}`;
    image.src = avatar;
    image.alt = name.textContent;

    document.body.appendChild(image);
    image.insertAdjacentElement('afterend', name);
}

async function go(){
    console.log('going');
    await wait(2000);
    console.log('ending');
}

async function getDate(){
    const dob = document.createElement('h2');

    const birthDate = faker.date.birthdate();
    const formatted = await format(birthDate, `LLLL 'the' do y`)
    
    const result = await formatDistance(
        new Date(),
        birthDate,
        { 
            includeSeconds: true 
        }
    )

    dob.textContent = `DOB: ${formatted}, ${result}`;
    document.body.appendChild(dob);
}

async function getJoke(){
    const {data} = await axios.get('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    })
    
    const joke = document.createElement('p');
    joke.textContent =  `Joke: "${data.joke}"`

    document.body.appendChild(joke);
}

const common = intersection
    (
        [1, 2, 3, 4, 5],
        [2, 3, 4, 5, 6]
    );


console.log(common);

const obj1 = {name: 'Sonali'};
const obj2 = {name: 'Sonali'};

console.log(`eq(): ${eq(obj1, obj2)}`);
console.log(`isEqual(): ${isEqual(obj1, obj2)}`);

getFakePerson();
getDate();
getJoke();

function checkIfCoolName(name){
    return new Promise((res, rej) => {
        if(name === 'Sonali')
            return res('cool name');
        return rej(new Error('Not a cool name'));
    })
}

async function isCoolName(){
    const [err, successValue] = await to(checkIfCoolName('Sonali'));
    if(err)
        console.log(err);
    else 
        console.log(successValue);
}

isCoolName();
// go();