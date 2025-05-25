const deleteTask = document.querySelectorAll('.delete-task-btn');

deleteTask.forEach(deleteBtn => {
  deleteBtn.addEventListener('click', () => {
    const taskContainer = deleteBtn.closest('.task-container');
    if (!taskContainer) return;

    taskContainer.remove();
  });
});