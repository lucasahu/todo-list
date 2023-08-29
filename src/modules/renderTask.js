import { storage } from "../objects/storage";
import { taskList } from "../components/taskList";

function renderTask() {
    if(storage.length !== 0) {

        const tableItem = document.createElement('tbody');

        for(let i = 0; i < storage.length; i++) {

            tableItem.innerHTML = `
            <tr class="table-item">
                <td>${storage[i].title}</td>
                <td>${storage[i].tags}</td>
                <td>${storage[i].priority}</td>
                <td>${storage[i].dueDate}</td>
                <td>${storage[i].state}</td>
            </tr>`;
            
            taskList.appendChild(tableItem);
        }
    }
}

export { renderTask };
