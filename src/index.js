//MODULE IMPORT SECTION

import { inputCard } from "./components/inputCard";
import { createTask } from "./modules/createTask";
import { storeTask } from "./modules/storeTask";

//DECLARATION SECTION

const main = document.querySelector('.main');

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn');
addTaskBtn.textContent = 'Add Task';

// APPPEND SECTION

main.appendChild(addTaskBtn);

// EVENT LISTENER SECTION

main.addEventListener('click', function(event){

    let targetElement = event.target;
    let submitBtnId = 'task-submit-btn';

    if (targetElement.id === submitBtnId) {
        const taskSubmitBtn = document.querySelector('#task-submit-btn');
        const taskNameText = document.querySelector('#task-name').value;
        const taskDescriptionText = document.querySelector('#task-description').value;
        const taskDatePicked = document.querySelector('#datePicker').value;
        const taskPriorityPicked = document.querySelector('#priorityPicker').value;
        const taskFormElement = document.querySelector('#add-task-form');

        taskSubmitBtn.addEventListener('click', createTask(taskNameText, taskDescriptionText, taskDatePicked, taskPriorityPicked, '', '', ''));

        taskFormElement.reset();
        inputCard.remove();
    }
}, true);

addTaskBtn.addEventListener('click', function() {
    main.appendChild(inputCard);
});