/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*************************************!*\
  !*** ./src/components/inputCard.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputCard: () => (/* binding */ inputCard)
/* harmony export */ });
const inputCard = document.createElement('div');

inputCard.classList.add('input-card');

inputCard.innerHTML = `
<form id="add-task-form">
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Task name</label>
  <input type="text" class="form-control" id="task-name" aria-describedby="emailHelp">
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Task description</label>
  <input type="text" class="form-control" id="task-description">
</div>
<div class="mb-3">
  <label for="datePicker">Enter a due date</label>
  <input id="datePicker" class="form-control" type="date" />
</div>
<div class="mb-3">
  <label for="priorityPicker" class="form-label">Select a priority level</label>
  <select class="form-select" aria-label="Default select example" id="priorityPicker">
    <option selected> </option>
    <option value="1">Super important</option>
    <option value="2">Fairly important</option>
    <option value="3">Important</option>
    <option value="4">Not that important</option>
    <option value="4">No importance</option>
  </select>
</div>
</form>
<button class="btn btn-success" id="task-submit-btn">Add task</button>
<button class="btn btn-secondary" id="task-back-btn">Back</button>`;


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRDYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaW5wdXRDYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgaW5wdXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmlucHV0Q2FyZC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jYXJkJyk7XG5cbmlucHV0Q2FyZC5pbm5lckhUTUwgPSBgXG48Zm9ybSBpZD1cImFkZC10YXNrLWZvcm1cIj5cbjxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5UYXNrIG5hbWU8L2xhYmVsPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwidGFzay1uYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWItM1wiPlxuICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+VGFzayBkZXNjcmlwdGlvbjwvbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gIDxsYWJlbCBmb3I9XCJkYXRlUGlja2VyXCI+RW50ZXIgYSBkdWUgZGF0ZTwvbGFiZWw+XG4gIDxpbnB1dCBpZD1cImRhdGVQaWNrZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJkYXRlXCIgLz5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgPGxhYmVsIGZvcj1cInByaW9yaXR5UGlja2VyXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+U2VsZWN0IGEgcHJpb3JpdHkgbGV2ZWw8L2xhYmVsPlxuICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1zZWxlY3RcIiBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiIGlkPVwicHJpb3JpdHlQaWNrZXJcIj5cbiAgICA8b3B0aW9uIHNlbGVjdGVkPiA8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPlN1cGVyIGltcG9ydGFudDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+RmFpcmx5IGltcG9ydGFudDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+SW1wb3J0YW50PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5Ob3QgdGhhdCBpbXBvcnRhbnQ8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPk5vIGltcG9ydGFuY2U8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG48L2Rpdj5cbjwvZm9ybT5cbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBpZD1cInRhc2stc3VibWl0LWJ0blwiPkFkZCB0YXNrPC9idXR0b24+XG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBpZD1cInRhc2stYmFjay1idG5cIj5CYWNrPC9idXR0b24+YDtcblxuZXhwb3J0IHtpbnB1dENhcmR9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==