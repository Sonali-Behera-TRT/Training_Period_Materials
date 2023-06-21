"use strict";
class Department {
    constructor(id, s) {
        this.id = id;
        this.employees = [];
        this.name = s;
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    gretting() {
        console.log(`Welcome to ${this.name} department.`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    showEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ChemDepartment extends Department {
    constructor(id, name) {
        super(id, name);
        this.notes = "";
        this.isInheritated = true;
        this.teachers = [];
        ChemDepartment.isChemistryDepartment = true;
    }
    static getInstance() {
        if (this.instance) // this refers to class itselff
            return this.instance;
        this.instance = new ChemDepartment('d2', 'chemistry');
        return this.instance;
    }
    sum(a, b) {
        if (typeof a === 'number' && typeof b === 'number')
            return a + b;
        if (this.isInheritated)
            return +a + +b;
        return a.toString() + b.toString();
    }
    get valueOfNotes() {
        return this.notes;
    }
    set valueOfNotes(note) {
        this.notes = note;
    }
    static sayHi(name) {
        if (this.isChemistryDepartment)
            return `Hi there! ${name}, Welcome to Chemistry Department.`;
        return `Hello there! ${name}, Welcome to Chemistry Department.`;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    showTeachers() {
        console.log(this.teachers.length);
        console.log(this.teachers);
    }
}
// const dept1= new Department('d1', 'IT');
// dept1.addEmployee('Hardik');
// dept1.addEmployee('Sonali');
// dept1.addEmployee('Monali');
// dept1.addEmployee('Manapriya');
// dept1.addEmployee('Dilip');
// dept1.showEmployees();
const chemDept = ChemDepartment.getInstance();
const chemDept2 = ChemDepartment.getInstance();
const chemDept3 = ChemDepartment.getInstance();
if (chemDept === chemDept2 && chemDept2 === chemDept3)
    console.log('Same');
else
    console.log("not same");
class Singleton {
    constructor() {
        this.name = 'Sonali';
        console.log("Okay! You are in constructor");
    }
    static getInstance() {
        console.log(this.instance);
        if (!this.instance)
            this.instance = new Singleton();
        return this.instance;
    }
}
const x = Singleton.getInstance();
const y = Singleton.getInstance();
console.log(x.name);
console.log(y.name);
y.name = 'Monali';
console.log(x.name);
console.log(y.name);
if (x === y) {
    console.log('same');
}
else
    console.log('not same');
// chemDept.addTeacher('Rishi');
// chemDept.addTeacher('Tanu');
// chemDept.showTeachers();
// chemDept.valueOfNotes = 'Yeah! you got the notes.';
// console.log(chemDept.valueOfNotes);
// console.log(chemDept.sum(2, 3));
// console.log(ChemDepartment.isChemistryDepartment);
// console.log(ChemDepartment.sayHi('Sonali'));
// // const dept2 = {
// //     name: 'HR',
// //     describe: dept1.describe
// // };
// // const dept3 = Object.assign({}, dept1);
// // // dept1.gretting();
// // // dept3.gretting();
// // dept3.name = 'accounting';
// // // dept1.gretting();
// // // dept3.gretting();
// // //dept2.describe();
// // const obj1 = {
// //     name: 'MOnali',
// //     age: 19,
// //     sayHi: (s: string) => `Hello ${s}`
// // }
// // const obj2 = {...obj1};
// // console.log(obj1);
// // console.log(obj2);
// //console.log(chemDept === chemDept2);
//# sourceMappingURL=class.js.map