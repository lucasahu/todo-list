const inputCard = document.createElement('div');

inputCard.classList.add('input-card');

inputCard.innerHTML = `
<form>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Task name</label>
  <input type="text" class="form-control" id="task-name" aria-describedby="emailHelp">
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Task description</label>
  <input type="text" class="form-control" id="task-description">
</div>
<label for="datePicker">Select a due date</label>
<input id="datePicker" class="form-control" type="date" />
<label for="priorityPicker" class="form-label">Select a priority level</label>
<select class="form-select" aria-label="Default select example" id="priorityPicker">
  <option selected> </option>
  <option value="1">Super important</option>
  <option value="2">Fairly important</option>
  <option value="3">Important</option>
  <option value="4">Not that important</option>
  <option value="4">No importance</option>
</select>
</form>
<button class="btn btn-primary" id="task-submit-btn">Submit</button>`;

export {inputCard};