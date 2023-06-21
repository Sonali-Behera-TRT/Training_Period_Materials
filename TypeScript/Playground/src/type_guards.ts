// type Type1 = string | number;
// type Type2 = {
//     fName: string;
//     age: number;
// } | {
//     lName: string;
//     address: string;
// };

// class ClassA{
//     name: string;
//     age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     printName(){
//         console.log(this.name);
//     }
//     printAge(){
//         console.log(this.age);
//     }
// }

// class ClassB{
//     name: string;
//     hobbies: string[];
//     constructor(name: string){
//         this.name = name;
//         this.hobbies = [];
//     }
//     printName(){
//         console.log(this.name);
//     }
//     addHobby(hobby: string){
//         this.hobbies.push(hobby);
//     }
//     printHobbies(){
//         console.log(this.hobbies);
//     }
// }

// type Type3 = ClassA | ClassB;

// function typeCheck1(type1: Type1){
//     if(typeof type1 === 'number')
//         console.log(type1 + 1);
//     else console.log(type1 + '1');
// }

// function typeCheck2(type2: Type2){
//     if('fName' in type2)
//         console.log(type2.fName);
//     if('age' in type2)
//         console.log(type2.age);
//     if('address' in type2)
//         console.log(type2.address);
// }

// function typeCheck3(type3: Type3){
//     console.log(type3.name);
//     // if('printAge' in type3)
//     //     type3.printAge();
//     // if('addHobby' in type3)
//     //     type3.addHobby('Singing');
//     // if('printHobbies' in type3)
//     //     type3.printHobbies();
//     if(type3 instanceof ClassA)
//         type3.printAge();
//     else{
//         type3.addHobby('Dancing');
//         type3.printHobbies();
//     }
// }

// typeCheck1(1);
// typeCheck2({fName: 'Sonali', age: 21});

// let type3: Type3 = new ClassB('Monali');
// typeCheck3(type3);