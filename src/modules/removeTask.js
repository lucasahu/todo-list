import { storage } from "../objects/storage";
import { renderTask } from "./renderTask";

function removeTask(index) {
    storage.splice(index, 1);
    renderTask();
}

export { removeTask };