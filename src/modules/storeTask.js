import { storage } from '../objects/storage.js';

function storeTask(task, operation, index) {
    
    if (operation !== 'edit') {
        storage.push(task);
        console.log(storage);
    } else if (operation == 'edit') {
        storage.splice(index - 1, 1, task);
        console.log(storage);
    }
}

export { storeTask };