// Project status enum to know whether the project is active or finished.
export enum ProjectStatus {Active, Finished};

// Project class that stroes the property that should be there in the project objects.
export class Project{
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public people: number,
        public status: ProjectStatus
    ){}
}