import { Task } from "../objects/task.js";
import { storeTask } from "./storeTask.js";

function createTask(title, description, dueDate, priority, notes, tags, checklist, state, operation, index) {

    if (dueDate == '') {
        dueDate = 'none';
    }

    if (priority == '') {
        priority = 'none';
    }

    if (notes == '') {
        notes = [];
    }

    if (tags == '') {
        tags = [];
    }

    if (checklist == '') {
        checklist = [];
    }

    state = false;

    let task = new Task(title, description, dueDate, priority, notes, tags, checklist, state);

    storeTask(task, operation, index);
}

export { createTask };



