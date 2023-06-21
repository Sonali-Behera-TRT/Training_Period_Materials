import {Feature} from 'ol/index';
import {Vector as VectorSource} from 'ol/source';
import {Point} from 'ol/geom';
import {Vector as VectorLayer} from 'ol/layer';
import {useGeographic} from 'ol/proj';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {faker} from '@faker-js/faker';

useGeographic();
const place = [+faker.address.latitude(), +faker.address.longitude()];
const point = new Point(place);
new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    }),
    new VectorLayer({
        source: new VectorSource({
          features: [new Feature(point)],
        }),
        style: {
          'circle-radius': 9,
          'circle-fill-color': 'red',
        },
      }),
  ],
  view: new View({
    center: place,
    zoom: 5
  })
});


// import 'reflect-metadata';
// import { plainToClass } from 'class-transformer';
// import { IsNotEmpty, IsNumber, IsPositive, validate } from 'class-validator';

// class A{
//     @IsNotEmpty()
//     title: string;

//     @IsNumber()
//     @IsPositive()
//     price: number;

//     constructor(t: string, p: number){
//         this.title = t;
//         this.price = p;
//     }

//     getInformation(){
//         return [this.title, `$${this.price}`];
//     }
// }



// let obj1 = {
//     title: 'Sonali', 
//     price: 100
// };
    
// const obj2 = new A('', -5);
// validate(obj2).then(errors => {
//     if(!errors.length)
//         console.log('Okay');
//     else{
//         errors.forEach(error => {
//             console.log(error.constraints);
//         })
//     }
// });

// console.log(obj1 instanceof A);

// obj1 = plainToClass(A, obj1);
// console.log(obj1 instanceof A);

// // import _ from 'lodash';

// // const arr = [1, 2, 3];
// // console.log(_.shuffle(arr));

// // declare const a: number;
// // declare let b: number;
// // declare const trainee: {
// //     name: string,
// //     mentor: string,
// //     doj: string
// // };

// // declare function callYourMom(name: string): void;

// // declare class MyClass {
// //     className: string;
// //     constructor(val: string);
// //     printClassName(): void;
// //     sayHi(): void;
// // }
// // callYourMom('Mom');


// // const app = new MyClass('app');
// // console.log(a);
// // console.log(b);

// // b = 51;
// // console.log(b);
// // console.log(trainee);
// // app.printClassName();
// // app.sayHi();

// // declare interface Person{
// //     name: string
// // }

// // const p1:Person = {
// //     name: 'SOnali'
// // }

// // console.log(p1);