const editInputCard = document.createElement('div');

editInputCard.classList.add('edit-input-card');

editInputCard.innerHTML = `
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
<button class="btn btn-success" id="task-submit-edit-btn">Edit task</button>
<button class="btn btn-secondary" id="task-back-btn">Back</button>`;

export { editInputCard };