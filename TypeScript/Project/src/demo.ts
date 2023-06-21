namespace Shapes{
    export namespace Circles{
        export const person = {
            name: 'Sonali Behera',
            age: 21
        }
        export const everything = 'My Krishna';
        export class Radius{
            radius: number = 7;

            constructor(num: number){
                this.radius = num;
            }

            area(){
                return 3.14 * this.radius ** 2;
            }
        }
    }
}