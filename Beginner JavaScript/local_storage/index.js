// // console.log('working');
// localStorage.setItem('name', 'Sonali');
// localStorage.setItem('age', 21);

// // sessionStorage.setItem('sname', 'ssonali');
// // sessionStorage.setItem('sage', 's21');

// console.log(localStorage.getItem('name'));
// console.log(localStorage.getItem('age'));

// //localStorage.removeItem('age');

// console.log(localStorage.getItem('name'));
// console.log(localStorage.getItem('age'));

// window.onstorage = (e) => {
//     alert('changed');
//     console.log(e.key, e.oldValue, e.newValue, e.url, e.storageArea);
// }

// localStorage.fruits = JSON.stringify(['apple', 'banana', 'mango']);


const myString = JSON.stringify(localStorage);
console.log(JSON.parse(myString));

console.log(JSON.parse(localStorage.fruits));
