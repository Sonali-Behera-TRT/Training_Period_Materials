// interface Type1{
//     name: string;
//     age: number;
// };

// interface Type2{
//     name: string;
//     hobbies: string[];
// }

// interface Type3 extends Type1, Type2{};

// const type3: Type3 = {
//     name: 'Sonali',
//     age: 21,
//     hobbies: ['dancing', 'painting', 'book reading'],
// };

// console.log(type3);

// type Type1 = number | string | boolean;
// type Type2 = string | number[] | boolean;

// type Type3 = Type1 & Type2;
// let type3: Type3 = 'Sonali';
// console.log(typeof type3, type3);
// type3 = false;

// class A{
//     name:string = 'Sonali';
//     age: number = 12;

//     getName(){
//         console.log(this.name);
//     }
// }

// class B{
//     hobbies: string[] = ['drawing', 'painting'];
//     getHobbies(){
//         console.log(this.hobbies);
//     }
// }

// let objA: A & B;
// objA = {
//     name: 'Monali',
//     age: 25,
//     getName() {
//         console.log('Your name is dk');
//     },

//     hobbies: ['running'],
//     getHobbies(){
//         console.log('hehe');
//     }
// };

// type Type1 = string;
// type Type2 = number;
// type Type3 = number;

// type Type4 = Type2 & Type3;

// let ab: Type4;