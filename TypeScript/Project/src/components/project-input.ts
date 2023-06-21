import Component from "./base";
import Autobind from '../decorators/autobind';
import { Validatable, validate } from "../util/validation";
import { projectState } from "../state/project";

// Project-input class that handles the form
export default class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
    titleEl: HTMLInputElement;
    descriptionEl: HTMLInputElement;
    peopleEl: HTMLInputElement;

    constructor(){
        super('project-input', 'app', 'user-input');
        this.titleEl = this.element.querySelector('#title')! as HTMLInputElement;
        this.descriptionEl = this.element.querySelector('#description')! as HTMLInputElement;
        this.peopleEl = this.element.querySelector('#people')! as HTMLInputElement;

        this.configure();
    }

    // add event-listeners to the submit button
    configure(){
        this.element.addEventListener('submit', this.handleSubmit);
    }

    // handler to handle the user given values from the form and filter them and send back to the project list class to list them
    @Autobind
    private handleSubmit(e: Event){
        e.preventDefault();
        const userInput = this.gatherUserInput();

        if(Array.isArray(userInput)){
            projectState.addProject(userInput[0], userInput[1], userInput[2]);
        }
        else 
            alert('Please Enter a valid value!!!');
        this.element.reset();
    }

    // It sents the validate function all the things that we need to validate and then It sends the validated item back to the handleSubmit function, so that then handleSubmit can send it back to ProjectList class
    private gatherUserInput(): [string, string, number] | void{
        const enteredTitle = this.titleEl.value;
        const enteredDesc = this.descriptionEl.value;
        const enteredPeople = this.peopleEl.value;

        const titleValidatable: Validatable = {
            value: enteredTitle, 
            required: true
        }

        const descValidatable: Validatable = {
            value: enteredDesc, 
            required: true,
            minLength: 5
        }

        const peopleValidatable: Validatable = {
            value: enteredPeople, 
            required: true,
            min: 1, 
            max: 5
        }

        if(
        validate(titleValidatable) && 
        validate(descValidatable) && 
        validate(peopleValidatable)
        )
            return [enteredTitle, enteredDesc, +enteredPeople];

        return;
    }
}