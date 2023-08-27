//MODULE IMPORT SECTION

import { inputCard } from "./components/inputCard";

//DECLARATION SECTION

const main = document.querySelector('.main');

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn');
addTaskBtn.textContent = 'Add Task';

// APPPEND SECTION

main.appendChild(addTaskBtn);

// EVENT LISTENER SECTION

addTaskBtn.addEventListener('click', function() {
    main.appendChild(inputCard);
})