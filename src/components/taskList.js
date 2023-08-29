const taskList = document.createElement('table');

taskList.classList.add('table', 'table-dark', 'table-striped', 'table-component');

taskList.innerHTML = `
<thead>
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Tags</th>
        <th scope="col">Priority</th>
        <th scope="col">Due date</th>
        <th scope="col">status</th>
    </tr>
</thead>
<tbody>
    <tr class="table-item">
        <td>test name</td>
        <td>test tags</td>
        <td>test priority</td>
        <td>test date</td>
        <td>test status</td>
    </tr>
</tbody>`

export {taskList};