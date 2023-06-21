// interface Person{
//     name?: string;
//     age: number;
//     id: number;

//     greet(s: string): string;
// }

// interface GoodPerson extends Person{
//     isGood: boolean;
// }

// const person: Person = {
//     age: 12,
//     id: 5,
//     greet(s: string){
//         return s;
//     }
// }

// // type addFun = () => string;
// interface addFun{
//     (a: number, b: number):number;
// }

// const addA: addFun = (a: number, b: number) => a + b;

// const obj3: GoodPerson = {
//     // name: 'Sonali',
//     age: 12,
//     id: 5,
//     isGood: true,
//     greet(s: string){
//         return s;
//     }
// }

// const h: () => string = () => '';

// class A implements Person{
//     readonly isA: boolean;
//     constructor(public readonly name: string, public age: number, public id: number){
//         this.isA = true;
//     }

//     greet(): string {
//         return `Hello ${this.name};`
//     }

//     sayHi(){
//         console.log('Hi ' + this.name);
//     }
// }

// const obj2 = new A('Sonali', 22, 2);
// console.log(obj2.greet());

// let obj1: Person;
// obj1 = new A('Monali', 19, 1);
// obj1.name = 'hoi';
// console.log(obj1);

// console.log(obj1.greet('Hi there'));

// console.log(obj1);