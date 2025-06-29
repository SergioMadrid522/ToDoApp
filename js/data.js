export function showData() {
  const sidebar = document.querySelector(".sidebar");


  const existingTasks = sidebar.querySelectorAll(".task-container");
  existingTasks.forEach((task) => task.remove());

  const tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    taskContainer.innerHTML = `
        <div class="task-name-container">
            <span class="task-name">${task.taskName}</span>
            <div class="delete-task-btn">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="task-description">${task.taskDescription}</div>
        `;
    sidebar.appendChild(taskContainer);
  });
}

/* 
1. notepad
2. imprimir
3. ver la peli
4. asdasd
5. asdasd
6.asdasd
 */
{
  /* 
    <div class="task-container">
        <div class="task-name-container">
            <span class="task-name">Do my homework 1</span>
            <div class="delete-task-btn">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="task-description"></div>
    </div>
 */
}
