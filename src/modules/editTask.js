import { createTask } from "./createTask";

function editTask(title, description, dueDate, priority, notes, tags, checklist, state, index) {
    const operation = 'edit';
    createTask(title, description, dueDate, priority, notes, tags, checklist, state, operation, index);
}

export { editTask };