const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.textContent = taskText;
    taskList.appendChild(task);
    taskInput.value = '';

    task.addEventListener('click', () => {
      task.classList.toggle('done');
    });
  }
}