//Autobind decorator to bind the scope of 'this'
export default function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const originalFunction = descriptor.value;

const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get(){
        const boundFunction = originalFunction.bind(this);
        return boundFunction;
    }
}

return adjDescriptor;
}