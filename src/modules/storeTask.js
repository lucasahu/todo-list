import { storage } from '../objects/storage.js';

function storeTask(task) {
    storage.push(task);
    console.log(storage);
}

export { storeTask };