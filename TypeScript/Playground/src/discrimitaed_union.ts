// interface A{
//     type: 'A';
//     name: string;
//     age: number;
//     printName(): void;
// }

// interface B{
//     type: 'B';
//     name: string;
//     hobbies: string[];
//     addHobby(hobby: string): void;
//     printHobbies(): void;
// }

// type Type1 = A | B;
// const obj1: Type1 = {
//     type: 'B',
//     name: 'Hardik',
//     hobbies: ['dancing', 'sleeping'],
//     addHobby(hobby: string){
//         this.hobbies.push(hobby);
//     },
//     printHobbies(){
//         console.log(this.hobbies);
//     }
// };

// function typeCheck(type1: Type1){
//     console.log(type1.name);
//     switch(type1.type){
//        case 'A': 
//                 type1.printName();
//                 break;
//         case 'B': 
//                 type1.addHobby('gardening');
//                 type1.printHobbies();
//                 break;
//     }
// }

// typeCheck(obj1);