// Base class for all the components
export default abstract class Component<T extends HTMLElement, U extends HTMLElement>{
    templateEl: HTMLTemplateElement;
    hostEl: T;
    element: U;

    constructor(templateId: string, hostId: string, elementId?: string){
        this.templateEl = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostEl = document.getElementById(hostId)! as T;

        const importedNode = document.importNode(this.templateEl.content, true);
        this.element = importedNode.firstElementChild! as U;

        if(elementId)
            this.element.id = elementId;

        this.attach();
    }

    // attaches the elements to the dom body
    private attach(){
        this.hostEl.appendChild(this.element);
    }

    abstract configure(): void;
}