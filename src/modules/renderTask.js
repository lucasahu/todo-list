import { storage } from "../objects/storage";
import { taskList } from "../components/taskList";

function renderTask() {
    const taskContainerElement = document.querySelector('#tasks-container');
    taskContainerElement.innerHTML = '';
    for(let i = 0; i < storage.length; i++) {
        const task = storage[i];
        const tableItem = document.createElement('div');

        tableItem.classList = "task-row";
        tableItem.innerHTML = `
        <p>${task.title}</p>
        <p>${task.tags}</p>
        <p>${task.priority}</p>
        <p>${task.dueDate}</p>

        <button class="btn btn-outline-danger" id="task-remove-btn" onclick="removeTask(${i})">Remove</button>`;
            
        taskList.appendChild(tableItem);
        taskContainerElement.appendChild(tableItem);
    }
}

export { renderTask };
