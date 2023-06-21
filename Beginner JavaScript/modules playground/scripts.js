import { sayHello as greetHello, sayHi } from "./utils.js";

const name = 'Sonali Behera';
console.log(sayHi(name));
console.log(greetHello(name));

async function getCurrency(){
    const {default : opt, arr} = await import('./handlers.js');
    console.log(opt);
    console.log(arr);
}

getCurrency();
console.log('working');