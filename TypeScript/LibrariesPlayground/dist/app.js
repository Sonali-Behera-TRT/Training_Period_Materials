var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsPositive, validate } from 'class-validator';
class A {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
    getInformation() {
        return [this.title, `$${this.price}`];
    }
}
__decorate([
    IsNotEmpty()
], A.prototype, "title", void 0);
__decorate([
    IsNumber(),
    IsPositive()
], A.prototype, "price", void 0);
let obj1 = {
    title: 'Sonali',
    price: 100
};
const obj2 = new A('', -5);
validate(obj2).then(errors => {
    if (!errors.length)
        console.log('Okay');
    else {
        errors.forEach(error => {
            console.log(error.constraints);
        });
    }
});
console.log(obj1 instanceof A);
obj1 = plainToClass(A, obj1);
console.log(obj1 instanceof A);
//# sourceMappingURL=app.js.map