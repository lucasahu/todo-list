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

/***/ "./src/modules/renderTask.js":
/*!***********************************!*\
  !*** ./src/modules/renderTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeTask: () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _objects_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/storage */ "./src/objects/storage.js");
/* harmony import */ var _renderTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTask */ "./src/modules/renderTask.js");



function removeTask(index) {
    _objects_storage__WEBPACK_IMPORTED_MODULE_0__.storage.splice(index, 1);
    (0,_renderTask__WEBPACK_IMPORTED_MODULE_1__.renderTask)();
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1o2QztBQUNLOztBQUVsRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsSUFBSSxxREFBTyxTQUFTO0FBQ3ZDLHFCQUFxQixxREFBTztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsVUFBVTtBQUN2QixhQUFhLGNBQWM7QUFDM0IsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQSxpRkFBaUYsRUFBRTtBQUNuRixrRkFBa0YsRUFBRTtBQUNwRjtBQUNBLFFBQVEsMERBQVE7QUFDaEI7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ0Qjs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUNIOztBQUUxQztBQUNBLElBQUkscURBQU87QUFDWCxJQUFJLHVEQUFVO0FBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXJUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9vYmplY3RzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVtb3ZlVGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG50YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YWJsZScpO1xuXG50YXNrTGlzdC5pbm5lckhUTUwgPSBgXG48ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgPHA+VGFzazwvcD5cbiAgICA8cD5UYWdzPC9wPlxuICAgIDxwPlByaW9yaXR5PC9wPlxuICAgIDxwPkR1ZSBkYXRlPC9wPlxuICAgIDxwPlN0YXR1czwvcD5cbjwvZGl2PlxuPGRpdiBpZD1cInRhc2tzLWNvbnRhaW5lclwiPjwvZGl2PmA7XG5cbmV4cG9ydCB7dGFza0xpc3R9OyIsImltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwiLi4vb2JqZWN0cy9zdG9yYWdlXCI7XG5pbXBvcnQgeyB0YXNrTGlzdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Rhc2tMaXN0XCI7XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2soKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtY29udGFpbmVyJyk7XG4gICAgdGFza0NvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHN0b3JhZ2VbaV07XG4gICAgICAgIGNvbnN0IHRhYmxlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRhYmxlSXRlbS5jbGFzc0xpc3QgPSBcInRhc2stcm93XCI7XG4gICAgICAgIHRhYmxlSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxwPiR7dGFzay50aXRsZX08L3A+XG4gICAgICAgIDxwPiR7dGFzay50YWdzfTwvcD5cbiAgICAgICAgPHA+JHt0YXNrLnByaW9yaXR5fTwvcD5cbiAgICAgICAgPHA+JHt0YXNrLmR1ZURhdGV9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1idG4tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtY2lyY2xlXCI+PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGlkPVwidGFzay1lZGl0LWJ0blwiIG9uY2xpY2s9XCJlZGl0VGFzaygke2l9KVwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgaWQ9XCJ0YXNrLXJlbW92ZS1idG5cIiBvbmNsaWNrPVwicmVtb3ZlVGFzaygke2l9KVwiPlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhYmxlSXRlbSk7XG4gICAgICAgIHRhc2tDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRhYmxlSXRlbSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyByZW5kZXJUYXNrIH07XG4iLCJjb25zdCBzdG9yYWdlID0gW107XG5cbmV4cG9ydCB7c3RvcmFnZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIi4uL29iamVjdHMvc3RvcmFnZVwiO1xuaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gXCIuL3JlbmRlclRhc2tcIjtcblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhpbmRleCkge1xuICAgIHN0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZW5kZXJUYXNrKCk7XG59XG5cbmV4cG9ydCB7IHJlbW92ZVRhc2sgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=