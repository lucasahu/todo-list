//MODULE IMPORT SECTION

import { inputCard } from "./components/inputCard";
import { createTask } from "./modules/createTask";
import { sidebar } from "./components/sidebar";
import { taskList } from "./components/taskList";
import { renderTask } from "./modules/renderTask";
import "./style.css"

//DECLARATION SECTION

const main = document.querySelector('.main');

const content = document.createElement('div');
content.classList.add('content');

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn', 'btn', 'btn-primary');
addTaskBtn.textContent = 'New task';

// APPPEND SECTION

main.appendChild(sidebar);
main.appendChild(content);
content.appendChild(addTaskBtn);
content.appendChild(taskList);


// EVENT LISTENER SECTION

main.addEventListener('click', function(event){

    let targetElement = event.target;
    const submitBtnId = 'task-submit-btn';
    const backBtnId = 'task-back-btn';

    if (targetElement.id === submitBtnId) {
        const taskSubmitBtn = document.querySelector('#task-submit-btn');
        const taskNameText = document.querySelector('#task-name').value;
        const taskDescriptionText = document.querySelector('#task-description').value;
        const taskDatePicked = document.querySelector('#datePicker').value;
        const taskPriorityPicked = document.querySelector('#priorityPicker').value;
        const taskFormElement = document.querySelector('#add-task-form');

        taskSubmitBtn.addEventListener('click', createTask(taskNameText, taskDescriptionText, taskDatePicked, taskPriorityPicked, '', '', ''));
        taskSubmitBtn.addEventListener('click', renderTask);

        taskFormElement.reset();
        inputCard.remove();
    }

    if (targetElement.id === backBtnId) {
        inputCard.remove();
    }

}, true);

addTaskBtn.addEventListener('click', function() {
    content.appendChild(inputCard);
});