// all possible conditions in which we should validate the input field data
export interface Validatable{
    value: string | number,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    min?: number,
    max?: number
}

// validate function to validate the user input data
export function validate(validatableInput: Validatable): boolean{
    let isValid = true;
    const propValue: string | number = validatableInput.value;

    if(typeof propValue === 'string'){
        if(validatableInput?.minLength != null){
            isValid = isValid && propValue.length >= validatableInput.minLength;
        }
        if(validatableInput?.maxLength != null){
            isValid = isValid && propValue.length <= validatableInput.maxLength;
        }
        if(validatableInput.required){
            isValid = isValid && propValue.length > 0 
        }
    }else{
        if(validatableInput?.min != null){
            isValid = isValid && propValue >= validatableInput.min;
        }
        if(validatableInput?.max != null){
            isValid = isValid && propValue <= validatableInput.max;
        }
        if(validatableInput.required){
            isValid = isValid && propValue > 0;
        }
    }
    return isValid;
}