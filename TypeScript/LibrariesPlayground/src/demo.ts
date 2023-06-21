const a = 10;
let b = 15;

const trainee = {
    name: 'Sonali Behera',
    mentor: 'Mansi Kikani',
    doj: '23rd Jan 2023',
}

function callYourMom(mom: string){
    console.log(`Heiyaaa ${mom}!!!`);
}

interface Person{
    name: string,
    age: number
}

class MyClass{
    className: string;
    readonly def = 14;
    constructor(val: string){
        this.className = val;
    }

    printClassName(){
        console.log(this.className);
    }

    sayHi(){
        console.log(this.def);
        console.log('welcome to this class');
    }
}