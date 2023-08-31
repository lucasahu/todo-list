//MODULE IMPORT SECTION

import { inputCard } from "./components/inputCard";
import { createTask } from "./modules/createTask";
import { sidebar } from "./components/sidebar";
import { taskList } from "./components/taskList";
import { renderTask } from "./modules/renderTask";
import { removeTask } from "./modules/removeTask";
import { editTask } from "./modules/editTask";
import "./style.css"
import { editInputCard } from "./components/editInputCard";

//DECLARATION SECTION

const main = document.querySelector('.main');

const content = document.createElement('div');
content.classList.add('content');

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn', 'btn', 'btn-primary');
addTaskBtn.textContent = 'New task';

window.removeTask = removeTask;
window.editTask = editTask;

// APPPEND SECTION

main.appendChild(sidebar);
main.appendChild(content);
content.appendChild(addTaskBtn);
content.appendChild(taskList);


// EVENT LISTENER SECTION

main.addEventListener('click', function(event){

    let targetElement = event.target;
    const submitTaskBtnId = 'task-submit-btn';
    const backTaskBtnId = 'task-back-btn';
    const editTaskBtnId = 'task-edit-btn';
    const submitTaskEditId = 'task-submit-edit-btn';
    let currentIndex = '';

    if (targetElement.id === submitTaskBtnId) {
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

    if (targetElement.id === backTaskBtnId) {
        inputCard.remove();
    }

    if (targetElement.id === editTaskBtnId) {
        content.appendChild(editInputCard);
        currentIndex = Number(targetElement.getAttribute('onclick').replace(/\D/g,''));
    }

    if (targetElement.id === submitTaskEditId) {
        const taskSubmitEditBtn = document.querySelector('#task-submit-edit-btn');
        const taskNameEditText = document.querySelector('#task-name').value;
        const taskDescriptionEditText = document.querySelector('#task-description').value;
        const taskDateEditPicked = document.querySelector('#datePicker').value;
        const taskPriorityEditPicked = document.querySelector('#priorityPicker').value;
        const taskFormEditElement = document.querySelector('#add-task-form');

        taskSubmitEditBtn.addEventListener('click', editTask(taskNameEditText, taskDescriptionEditText, taskDateEditPicked, taskPriorityEditPicked, '', '', '', currentIndex));
        taskSubmitEditBtn.addEventListener('click', renderTask);

        taskFormEditElement.reset();
        editInputCard.remove();
    }

}, true);

addTaskBtn.addEventListener('click', function() {
    content.appendChild(inputCard);
});