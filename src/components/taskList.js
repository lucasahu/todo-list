const taskList = document.createElement('div');

taskList.classList.add('table');

taskList.innerHTML = `
<div class="header">
    <p>Book Name</p>
    <p>Book Author</p>
    <p>Pages</p>
    <p>Status</p>
    <p>Delete</p>
</div>
<div id="tasks-container"></div>`;

export {taskList};