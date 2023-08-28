class Task {
    constructor(title, description, dueDate, priority, notes, tags, checklist, state) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.tags = tags;
        this.checklist = checklist;
        this.state = state;
    }
}

export {Task};