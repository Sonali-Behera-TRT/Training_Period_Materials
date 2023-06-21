import Component from "./base";
import { Draggable } from "../models/drag-drop";
import { Project } from "../models/project";
import Autobind from "../decorators/autobind";

// class of each project item
export default class ProejctItem extends Component<HTMLUListElement, HTMLLIElement>
implements Draggable{
    private project: Project;
    constructor(hostId: string, project: Project){
        super('single-project', hostId, project.id.toString());
        this.project = project;
        this.configure();
    }

    @Autobind
    handleDragStart(event: DragEvent) {
        event.dataTransfer!.effectAllowed = 'move';
        event.dataTransfer!.setData('text/plain', this.project.id.toString());
    }

    handleDragEnd(_: DragEvent) {
        console.log('ended');
    }

    get person(){
        if(this.project.people === 1)
            return '1 person';
        return `${this.project.people} persons`;
    }

    configure(): void {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.person + " assigned";
        this.element.querySelector('p')!.textContent = this.project.description;

        this.element.addEventListener('dragstart', this.handleDragStart);
        this.element.addEventListener('dragend', this.handleDragEnd);
    }
}