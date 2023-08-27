class Task {
    constructor(title, description, dueDate, priority, state, notes, tags, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.state = state;
        this.notes = notes;
        this.tags = tags;
        this.checklist = checklist;
    }
}

export {Task};