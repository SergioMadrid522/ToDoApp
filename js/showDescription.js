const sidebar = document.querySelector(".sidebar");

sidebar.addEventListener("click", (e) => {
  const taskName = e.target.closest(".task-name");
  if (!taskName) return;

  const taskContainer = taskName.closest(".task-container");
  if (!taskContainer) return;

  const taskDescription = taskContainer.querySelector(".task-description");
  if (!taskDescription) return;

  taskDescription.classList.toggle("show");
});
