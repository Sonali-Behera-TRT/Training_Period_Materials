import ProjectInput from "./components/project-input";
import ProjectList from "./components/project-list";

// creating objects of respective classes to show the components.
new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

// // namespace shapes{
// //     export namespaces circles{
// //     export class radius{}
// //     }
// //     }
// /// <reference path = "./demo.ts" />

// const person = Shapes.Circles.person;
// const circle = Shapes.Circles;
// const rad = new circle.Radius(4);
// console.log(person.name);
// console.log(rad.radius);
// console.log(`Area of circle with radius ${rad.radius} unit is ${rad.area()} sq.unit`);

// import mine = Shapes.Circles.everything;
// console.log(mine);

// const onlyMine = Shapes.Circles.everything;
// console.log(onlyMine);

// import radiusClass = Shapes.Circles.Radius;
// const r1 = new radiusClass(3);
// console.log(r1);

// r1.radius = 5;
// console.log(r1);