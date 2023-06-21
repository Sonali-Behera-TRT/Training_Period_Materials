import Component from "./base";
import { Droppable } from "../models/drag-drop";
import { Project, ProjectStatus } from "../models/project";
import Autobind from "../decorators/autobind";
import { projectState } from "../state/project";
import ProejctItem from "./project-item";

// Project list class that handles the projects listing in both active project div and finished project lists
export default class ProjectList extends Component<HTMLDivElement, HTMLElement>
implements Droppable{
    assignedProjects: Project[] = [];

    constructor(private type: 'active' | 'finished'){
        super('project-list', 'app', `${type}-projects`);

        this.configure();
        this.renderContent();
    }  
    
    @Autobind
    handleDragOver(event: DragEvent) {
        event.preventDefault();
        this.element.classList.add('droppable');
    }

    @Autobind
    handleDragLeave(_: DragEvent) {
        this.element.classList.remove('droppable');
    }

    @Autobind
    handleDrop(event: DragEvent) {
        const projectId = event.dataTransfer?.getData('text/plain');
        if(projectId)
            projectState.moveProject(+projectId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
    }

    // insert listener function into the listeners array of ProjectState class
    configure(){
        this.element.querySelector('ul')!.addEventListener('dragover', this.handleDragOver);    
        this.element.addEventListener('dragleave', this.handleDragLeave);
        this.element.addEventListener('drop', this.handleDrop);

        projectState.addListener((projects: Project[]) => {
            const requiredProjects = projects.filter(project => {
                if(this.type === 'active'){
                    return project.status === 0;
                } else
                    return project.status === 1;
            });

            this.assignedProjects = requiredProjects;
            this.renderProjects();
        });        
    }

    // It renders all the projects that should be showcased inside the list
    private renderProjects(){
        const ul = this.element.querySelector('ul')! as HTMLUListElement;

        ul.innerHTML = '';
        this.assignedProjects.forEach(project => {
            new ProejctItem(ul.id, project);
        });
    }

    // It sets the heading tag of active project div and finished project list
    private renderContent(){
        this.element.querySelector('h2')!.textContent = `${this.type.toUpperCase()} PROJECTS`;
        this.element.querySelector('ul')!.id = `${this.type}-projects-list`;
    }
}