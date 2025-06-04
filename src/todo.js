class Todo {
    #title;
    #description;
    #priority;
    #dueDate;
    #labels;
    #project;
    #subtasks;
    static #todoList = [];

    constructor(
        title,
        description,
        priority = 'Normal',
        dueDate = null,
        labels = [],
        project = 'default'
    ) {
        this.#title = title;
        this.#description = description;
        this.#priority = priority;
        this.#dueDate = dueDate;
        this.#labels = [...labels];
        this.#project = project;
        this.#subtasks = [];
    }

    static new(
        title,
        description,
        priority = 'Normal',
        dueDate = null,
        labels = [],
        project = 'default'
    ) {
        const newTodo = new Todo(title, description, priority, dueDate, labels, project);
        this.#todoList.push(newTodo);
        return newTodo;
    }

    static deleteTodo(index){
        this.#todoList.splice(index,1)
    }

    static get todoList(){
        return this.#todoList;
    }

    get title (){
        return this.#title;
    }

    set title(newTitle){
        this.#title = newTitle;
    }   

    get description(){
        return this.#description;
    }

    set description(newDescription){
        this.#description = newDescription;
    }

    get priority(){
        return this.#priority;
    }

    set priority(newPriority){
        this.#priority = newPriority
    }


    get dueDate(){
        return this.#dueDate;
    }
    

    set project(newProject){
        this.#project = newProject;
    }

    get labels() {
        return this.#labels;
      }
    
    addLabel(label){
        this.#labels.push(label)
    }

    addSubTask(subtask){
        this.#subtasks.push(subtask);
    }

    get subtasks(){
        return this.#subtasks;
    }
}

export default Todo;