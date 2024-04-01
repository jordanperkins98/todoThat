class Project {
    #name;
    #description;
    #startDate;
    #labels;

    constructor(name, description, startDate=null, labels){
        this.#name = name;
        this.#description = description;
        this.#startDate = startDate;
        this.#labels = [...labels];
    }

    static new(name, description, startDate, labels){
        return new Project(name, description, startDate, labels);
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        this.#name = newName;
    }

    get description(){
        return this.#description;
    }

    set description(newDescription){
        this.#description = newDescription;
    }

    get startDate(){
        return this.#startDate;
    }

    set startDate(newStartDate){
        this.#startDate = newStartDate;
    }

    get labels(){
        return this.#labels;
    }

    addLabel(label){
        this.#labels.push(label);
    }

}

export default Project