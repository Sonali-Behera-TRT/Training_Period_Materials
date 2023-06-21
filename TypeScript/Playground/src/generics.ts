// // function copy<T, U>(a: T, b: U){
// //     return Object.assign({}, a, b);
// // }

// // const res = copy({name: 'Sonali'}, {age: 21});
// // console.log(res.name);

// // function add<T extends number | string, U extends number | string>(a: T, b: U){
// //     if(typeof a === 'number' && typeof b === 'number')
// //         return a + b;
// //     return a.toString() + b.toString();
// // }

// // const res2 = add(1, 'Sonali');
// // console.log(res2);

// // interface Lengthy{
// //     length: number;
// // }

// // function describeLength<T extends Lengthy>(element: T): [Lengthy, string] {
// //     if(element.length === 0)    
// //         return [element, 'No length'];
// //     return [element, `Length is ${element.length}`];
// // }

// // const len = describeLength({name: 'Sonali', age: 21, length: 3});
// // console.log(len);

// // function getValue<T extends object, U extends keyof T>(obj: T, key: U){
// //     return obj[key];
// // }

// // console.log(getValue({name: 'Sonali Behera'}, 'name'));

// class GenericClass<T extends string, U extends number>{
//     private name: T;
//     private age: U;
//     private hobbies: T[];

//     constructor(str: T, num: U){
//         this.name = str;
//         this.age = num;
//         this.hobbies = [];
//     }

//     getName(){
//         return this.name;
//     }

//     getAge(){
//         return this.age;
//     }

//     addHobby(hobby: T){
//         this.hobbies.push(hobby);
//     }

//     printHobbies(){
//         console.table(this.hobbies);
//     }

//     removeHobby(key: T){
//         if(this.hobbies.includes(key))
//             this.hobbies.splice(this.hobbies.indexOf(key), 1);
//     }
// }

// const obj = new GenericClass<string, number>('Hardik', 10);
// console.log(obj.getName());

// obj.addHobby('swimming');
// obj.addHobby('sleeping');
// obj.addHobby('dancing');

// obj.printHobbies();

// obj.addHobby('crying');
// obj.printHobbies();

// obj.removeHobby('sleepingg');
// obj.printHobbies();

// function transform<T extends string, U extends boolean>(s: T, isUpper: U){
//     if(isUpper){
//         return s.toUpperCase();
//     } else {
//         return s.toLowerCase();
//     }
// }

// console.log(transform<string, boolean>('sOnAlI', true));

// function wait(){
//     return new Promise<string>((res) => {
//         res('okay!');
// })};

// interface Inter{
//     name: string,
//     age: number,
//     hobbies: Readonly<string[]>
// }

// let temp: Partial<Inter> = {};
// temp.name = 'sonali';
// temp.age = 22;
// temp.hobbies = ['drawing', 'painting'];