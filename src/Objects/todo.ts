export interface Itodo {
    name: string;
    content: string;
    id: number;
}

export class Todo {
    private todoData: Itodo;

    constructor(data: Itodo){
        this.todoData = data;
    }
    get name(){
        return this.todoData.name;
    }
    get content(){
        return this.todoData.content;
    }
    get id(){
        return this.todoData.id;
    }
}