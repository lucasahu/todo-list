const taskList = document.createElement('div');

taskList.classList.add('table');

taskList.innerHTML = `
<div class="header">
    <p>Task</p>
    <p>Tags</p>
    <p>Priority</p>
    <p>Due date</p>
    <p>Status</p>
</div>
<div id="tasks-container"></div>`;

export {taskList};