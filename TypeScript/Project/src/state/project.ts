import { Project, ProjectStatus } from "../models/project";

// custom generic type Listener that shows a function having parameter array of generic type that can be applied to multiple type listeners in case of a big project
type Listener<T> = (items: T[]) => void;


// base state class which will be helpful to manage multiple state in case of a big project in order to manage multiple type of listeners
class State<T>{
    listeners: Listener<T>[] = [];
    
    addListener(fun: Listener<T>){
        this.listeners.push(fun);
    }
}

// Singleton Project state management class to manage a single instance of states of the project
export class ProjectState extends State<Project>{
    projects: Project[] = [];
    private count: number = 1;
    private static instance: ProjectState;

    private constructor() {
        super();
    }

    // add a single project into the array of projects when the user clicks the add button in the list
    addProject(title: string, desc: string, people: number){
        const newProject = new Project(
            this.count++,
            title,
            desc,
            people,
            ProjectStatus.Active
        );

        this.projects.push(newProject);
        this.updateListeners();
    }

    moveProject(id: number, newStatus: ProjectStatus){
        const project = this.projects.find(project => project.id === id);

        if(project && project.status !== newStatus){
            project.status = newStatus;
            this.updateListeners();
        }
    }

    private updateListeners(){
        this.listeners.forEach(listener => listener(this.projects.slice()));
    }

    static getInstance(){
        if(!this.instance)
            this.instance = new ProjectState();

        return this.instance;
    }
}

export const projectState = ProjectState.getInstance();