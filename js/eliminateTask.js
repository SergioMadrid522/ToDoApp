document.addEventListener("click", async (e) => {
  const deleteBtn = e.target.closest(".delete-task-btn");
  if (!deleteBtn) return;

  const taskContainer = deleteBtn.closest(".task-container");
  if (!taskContainer) return;

  const taskName = taskContainer.querySelector(".task-name")?.textContent;
  const taskDescription =
    taskContainer.querySelector(".task-description")?.textContent;

  const result = await Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });

  if (result.isConfirmed) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((task) => {
      return !(
        task.taskName === taskName && task.taskDescription === taskDescription
      );
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    taskContainer.remove();
    Swal.fire({
      title: "Deleted!",
      text: "Your task has been deleted.",
      icon: "success",
    });
  }
});
