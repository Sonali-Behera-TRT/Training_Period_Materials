"use strict";
// // // function Dec(str: string = 'Calling decorators...'){
// // //     return function(fun: Function){
// // //         console.log(str);
// // //         console.log(fun);
// // //     }
// // // }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// // function ChangeText(el: string){
// //     return function(fun: any){
// //         const element = document.querySelector(el)!;
// //         console.log(element);
// //         const obj = new fun('Sonali', 21);
// //         console.log(obj);
// // //         element.innerHTML = `
// // //         <h1>${obj.name}</h1>
// // //         <h2>${obj.age}</h2>
// // //         `;
// // //     }
// // // }
// // // // @Dec("Okay... I don't care")
// // // @ChangeText('.app')
// // // class A{
// // //     name: string;
// // //     age: number;
// // //     constructor(name: string, age: number){
// // //         this.name = name;
// // //         this.age = age;
// // //     }
// // //     printName(){
// // //         console.log(this.name);
// // //     }
// // // }
// // // function Log1(target: any, propertyName: string | Symbol){
// // //     console.log("Property Decorators");
// // //     console.log(target);
// // //     console.log(propertyName);
// // // }
// // // function Log2(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor){
// // //     console.log('Accessor Decorators');
// // //     console.log(target);
// // //     console.log(propertyName);
// // //     console.log(descriptor);
// // // }
// // // function Log3(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor){
// // //     console.log('Method Decorators');
// // //     console.log(target);
// // //     console.log(propertyName);
// // //     console.log(descriptor);
// // // }
// // // function Log4(target: any, propertyName: string | Symbol, position: number){
// // //     console.log('Parameter Decorators');
// // //     console.log(target);
// // //     console.log(propertyName);
// // //     console.log(position);
// // // }
// // // class Product{
// // //     @Log1
// // //     title: string;
// // //     private price: number;
// // //     @Log2
// // //     set setPrice(val: number){
// // //         if(val >= 0)
// // //             this.price = val;
// // //     }
// // //     get setPrice(){
// // //         return this.price;
// // //     }
// // //     constructor(t: string, p: number){
// // //         this.title = t;
// // //         this.price = p;
// // //     }
// // //     @Log3
// // //     printTitle(){
// // //         console.log(this.title);
// // //     }
// // //     addTax(@Log4 tax: number){
// // //         return this.price + this.price * (1 + tax);
// // //     }
// // // }
// // function Dec(el: string){
// //     return function
// //     <T 
// //         extends 
// //         new(...args: any[]) => {
// //             name: string; 
// //             age: number;
// //         }
// //     >(originalClass: T)
// //     {
// //         return class extends originalClass{
// //             hobbiesHHHHHHHHHHHYYYYYYYYYTTTTTTFGFGFGFGFGFGFG: string[];
// //             constructor(...args: any[]){
// //                 super(...args);
// //                 this.hobbies = ['dancing', 'singing', 'drawing'];
// //                 const element = document.querySelector(el)!;
// //                 element.innerHTML = `
// //                 <h1>${this.name}</h1>
// //                 <h2>${this.age}</h2>
// //                 `;
// //             }
// //         } 
// //     }
// // }
// function PropertyDec1(_: any, __: string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor{
//     console.log('PD1');
//     console.log(descriptor)
//     return {value: () => {
//         console.log('Hello Doston!');
//     }};
// }
// function PropertyDec2(_: any, __: string | Symbol, descriptor: PropertyDescriptor){
//     console.log('PD2');
//     console.log(descriptor)
// }
// //@Dec('.app')
// // class A{
// //     name: string;
// //     age: number;
// //     constructor(n: string, a: number){
// //         this.name = n;
// //         this.age = a;
// //     }
// //     @PropertyDec1
// //     printName(){
// //         console.log(this.name);
// //     }
// // }
// // const obj: any = new A('mani', 45);
// //obj.printName();
// // console.log(obj);
// // obj.hobbies.push('so');
// // console.log(obj);
// const button = document.querySelector('button')!;
// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
//     const originalFun = descriptor.value;
//     const adjDescriptor: PropertyDescriptor = {
//         enumerable: false,
//         configurable: true,
//         get(){
//             const boundedFun = originalFun.bind(this);
//             return boundedFun;
//         }
//     }
//     return adjDescriptor;
// }
// class SayHi{
//     name: string = "";
//     constructor(n: string){
//         this.name = n;
//     }
//     @Autobind
//     sayHi(){
//         console.log(`Hi ${this.name} Ji.`);
//     }
// }
// const obj = new SayHi('Dilip');
// console.log(obj);
// button.addEventListener('click', obj.sayHi);
const courseForm = document.querySelector('form');
const titleEl = courseForm.querySelector('.title');
const priceEl = courseForm.querySelector('.price');
const registeredValidators = {};
function Require(target, propName) {
    var _a, _b;
    const className = target.constructor.name;
    registeredValidators[className] = Object.assign(Object.assign({}, registeredValidators[className]), { [propName]: [
            ...(_b = (_a = registeredValidators[className]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : [],
            'required'
        ] });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    const className = target.constructor.name;
    registeredValidators[className] = Object.assign(Object.assign({}, registeredValidators[className]), { [propName]: [
            ...(_b = (_a = registeredValidators[className]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : [],
            'positive'
        ] });
}
function validate(obj) {
    const className = obj.constructor.name;
    const classValue = registeredValidators[className];
    if (!classValue)
        return true;
    let isValid = true;
    for (const prop in classValue) {
        const propValue = classValue[prop];
        for (const value of propValue) {
            switch (value) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && (obj[prop] > 0);
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Require
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
courseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleEl.value;
    const price = +priceEl.value;
    const newCourse = new Course(title, price);
    if (!validate(newCourse)) {
        alert('Enter a valid value please!!!');
        return;
    }
    console.log(newCourse);
});
//# sourceMappingURL=decorator.js.map