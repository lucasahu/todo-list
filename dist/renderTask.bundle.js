/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/taskList.js":
/*!************************************!*\
  !*** ./src/components/taskList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskList: () => (/* binding */ taskList)
/* harmony export */ });
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



/***/ }),

/***/ "./src/objects/storage.js":
/*!********************************!*\
  !*** ./src/objects/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
const storage = [];



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/modules/renderTask.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTask: () => (/* binding */ renderTask)
/* harmony export */ });
/* harmony import */ var _objects_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/storage */ "./src/objects/storage.js");
/* harmony import */ var _components_taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/taskList */ "./src/components/taskList.js");



function renderTask() {
    const taskContainerElement = document.querySelector('#tasks-container');
    taskContainerElement.innerHTML = '';
    for(let i = 0; i < _objects_storage__WEBPACK_IMPORTED_MODULE_0__.storage.length; i++) {
        const task = _objects_storage__WEBPACK_IMPORTED_MODULE_0__.storage[i];
        const tableItem = document.createElement('div');

        tableItem.classList = "task-row";
        tableItem.innerHTML = `
        <p>${task.title}</p>
        <p>${task.tags}</p>
        <p>${task.priority}</p>
        <p>${task.dueDate}</p>
        <div class="task-btn-container">
        <div class="status-circle"></div>
        <button class="btn btn-secondary" id="task-edit-btn" onclick="editTask(${i})">Edit</button>
        <button class="btn btn-danger" id="task-remove-btn" onclick="removeTask(${i})">Remove</button>
        </div>`
        _components_taskList__WEBPACK_IMPORTED_MODULE_1__.taskList.appendChild(tableItem);
        taskContainerElement.appendChild(tableItem);
    }
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUNLOztBQUVsRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsSUFBSSxxREFBTyxTQUFTO0FBQ3ZDLHFCQUFxQixxREFBTztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsVUFBVTtBQUN2QixhQUFhLGNBQWM7QUFDM0IsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQSxpRkFBaUYsRUFBRTtBQUNuRixrRkFBa0YsRUFBRTtBQUNwRjtBQUNBLFFBQVEsMERBQVE7QUFDaEI7QUFDQTtBQUNBOztBQUVzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9vYmplY3RzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyVGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG50YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YWJsZScpO1xuXG50YXNrTGlzdC5pbm5lckhUTUwgPSBgXG48ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgPHA+VGFzazwvcD5cbiAgICA8cD5UYWdzPC9wPlxuICAgIDxwPlByaW9yaXR5PC9wPlxuICAgIDxwPkR1ZSBkYXRlPC9wPlxuICAgIDxwPlN0YXR1czwvcD5cbjwvZGl2PlxuPGRpdiBpZD1cInRhc2tzLWNvbnRhaW5lclwiPjwvZGl2PmA7XG5cbmV4cG9ydCB7dGFza0xpc3R9OyIsImNvbnN0IHN0b3JhZ2UgPSBbXTtcblxuZXhwb3J0IHtzdG9yYWdlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwiLi4vb2JqZWN0cy9zdG9yYWdlXCI7XG5pbXBvcnQgeyB0YXNrTGlzdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Rhc2tMaXN0XCI7XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2soKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtY29udGFpbmVyJyk7XG4gICAgdGFza0NvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHN0b3JhZ2VbaV07XG4gICAgICAgIGNvbnN0IHRhYmxlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhYmxlSXRlbS5jbGFzc0xpc3QgPSBcInRhc2stcm93XCI7XG4gICAgICAgIHRhYmxlSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxwPiR7dGFzay50aXRsZX08L3A+XG4gICAgICAgIDxwPiR7dGFzay50YWdzfTwvcD5cbiAgICAgICAgPHA+JHt0YXNrLnByaW9yaXR5fTwvcD5cbiAgICAgICAgPHA+JHt0YXNrLmR1ZURhdGV9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1idG4tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGlkPVwidGFzay1lZGl0LWJ0blwiIG9uY2xpY2s9XCJlZGl0VGFzaygke2l9KVwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgaWQ9XCJ0YXNrLXJlbW92ZS1idG5cIiBvbmNsaWNrPVwicmVtb3ZlVGFzaygke2l9KVwiPlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhYmxlSXRlbSk7XG4gICAgICAgIHRhc2tDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRhYmxlSXRlbSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyByZW5kZXJUYXNrIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=