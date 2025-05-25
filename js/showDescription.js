const taskNames = document.querySelectorAll('.task-name');

taskNames.forEach(taskName => {
  taskName.addEventListener('click', () => {
    const taskContainer = taskName.closest('.task-container');
    if (!taskContainer) return;

    const taskDescription = taskContainer.querySelector('.task-description');
    if (!taskDescription) return;

    taskDescription.classList.toggle('show');
  });
});