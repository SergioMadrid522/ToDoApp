const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskContainer = document.querySelector('.task-container');

export function showData() {
    tasks.forEach(task => {
        const taskName = document.createElement('span');
        taskName.classList.add('task-name');
        taskName.innerHTML = task.taskName;
        taskContainer.appendChild(taskName);
    });
}
{/* 
    <div class="task-name-container">
        <span class="task-name">Do my homework 1</span>
        <div class="delete-task-btn">
            <button>
                <!-- <span> -->
                    <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                <!-- </span> -->
            </button>
        </div>
    </div>
    <div class="task-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, provident dolores excepturi porro ullam harum eligendi pariatur possimus quo praesentium doloremque. Harum voluptates delectus, inventore officiis magnam tenetur laborum laboriosam.</div>
 */}