// Interface that handles all the handlers of drag event
export interface Draggable {
    // function that is fired when the drag event starts from the source
    handleDragStart(event: DragEvent): void;

    // Function that is fired when the drag event is ended from the source, This event is fired after drop event
    handleDragEnd(event: DragEvent): void;
}

// interface that handles all the handlers of drop event
export interface Droppable {
    // event that is fired when the drag element is over another element
    handleDragOver(event: DragEvent): void;

    // event fired when the drag element leaves a particular element
    handleDragLeave(event: DragEvent): void;

    // fired when the element is droped at the destination
    handleDrop(event: DragEvent): void;
}