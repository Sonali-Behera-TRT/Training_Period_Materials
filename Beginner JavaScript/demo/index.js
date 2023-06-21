// // // function callBack(){
// // //     console.log('Buzz');
// // // };

// // // const timeOut = setTimeout(callBack, 100);
// // // setTimeout(() => {
// // //     console.log('cleared');
// // //     clearTimeout(timeOut);
// // // }, 50);

// // const person = {
// //     fname: 'Sonali',
// //     lname: 'Behera',
// //     age: 20,
// //     gender: 'female',
// //     dob: '04-06-2001',
// //     address: 'Sundarpada, Bhubaneswar',
// //     job: 'Web Developer',
// //     clothing: {
// //         shirt: 4,
// //         pant: 5,
// //     },
// //     sayHi: (greeting = 'Hey') => {
// //         console.log(`${greeting} ${this}`);
// //     }
// // };

// // const name1 = 'Sonali Behera';
// // const name2 = 'Monali Behera';
// // console.log(name1 === name2);

// // let name3 = name1;
// // name3 = 'Dilip Kumar Behera';
// // console.log(name3);
// // console.log(name1);

// // let person1 = {
// //     fname: 'Sonali',
// //     lname: 'Behera',
// //     address: {
// //         city: 'Bhubaneswar',
// //         district: 'khordha',
// //         state: 'Odisha',
// //     }
// // };

// // const person2 = {
// //     fname: 'Lakishree',
// //     lname: 'Jati',
// // };

// // // const person3 = _.cloneDeep(person1);
// // // person3.fname = 'dilip';
// // // person3.address.city = 'berhampur';
// // // console.table(person3);
// // // console.table(person1);

// // const person3 = {...person1, ...person2, age: 30};

// // // const person3 = person1;
// // // person3.fname = 'dilip';
// // // console.log(person1);
// // // console.log(person2);
// // // console.log(person3);

// // // const person3 = {...person1};
// // // person3.fname = 'dilip';
// // // person3.address.city = 'berhampur';
// // // console.log(person1);
// // // console.log(person3);

// // // const person3 = Object.assign({}, person1);
// // // person3.fname = 'dilip';
// // // person3.address.city = 'berhampur';
// // // console.table(person1);
// // // console.table(person3);



// // // person.age = 22;

// // // Object.freeze(person);
// // // person.age = 50;

// // // console.log(person.age);

// const inventory = {
//     tomato: 10,
//     potato: 15,
// }

// function doStuff(data){
//     data = 20;
// }

// const data = 10;
// console.log(data);
// doStuff(data);
// console.log(data);
const person = {
    name: 'Monali Behera',
    age: 18
};

const job = "web developer";
const myMap = new Map();
myMap.set('fname', 'Sonali');
myMap.set('lname', 'Behera');
myMap.set('age', 21);
myMap.set(job, 'Good job');
myMap.set(person, 'Nice person');


const score = 200;
const prizes = new Map();
prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Car');

// console.log(`You won a ${prizes.get(score)}`);

const ul = document.querySelector('ul');
for(const [score, prize] of prizes){
    const li = `<li>${score} - ${prize}</li>`;
    ul.insertAdjacentHTML('beforeend', li);
}

// const map1 = new Map([['name', 'Sonali'], ['age', 21], [person, 'cool person']]);
// const map2 = new Map([['job', 'developer'], ...map1]);
// console.log(map1);
// console.log(map2);

// map2.set('name', 'Monali');
// map2.set(person, 'Not cool person');
// console.log(map1);
// console.log(map2);

let names = ['Sonali', 'Monali', 'Hardik'];

// names.forEach(name => {
//     console.log(name);
// });

// for(const name of names) {
//     console.log(name);
// }
// console.log(names);
// names.reverse();
// console.log(names);

// names.push('Dilip');
// names.unshift('Manapriya');
// console.log(names);

// // names.pop();
// // console.log(names);

// names.splice(1, 4);
// console.log(names);

function deleteAtPos(arr, key){
    const keyIndex = arr.findIndex(item => {
        return item === key;
    });
    return [
        ...arr1.slice(0, keyIndex),
        ...arr1.slice(keyIndex + 1)
    ];
}

function insertAtPos(arr, pos, key){
    return [
        ...arr.slice(0, pos - 1),
        key,
        ...arr.slice(pos - 1)
    ];
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = deleteAtPos(arr1, 2);
const result2 = insertAtPos(arr1, 6, 10);
console.log(result2);
// const arr2 = [...arr1];
// const arr3 = [
//     ...arr1.slice(0, 5),
//     10,
//     ...arr1.slice(5)
// ];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);