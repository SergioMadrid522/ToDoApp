//const taskContainer = document.querySelector(taskContainer);
import { showData } from "./data";

const form = document.getElementById('taskSender');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;

    if (taskName === "" || taskDescription === "") {
        return
    } 
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = { taskName, taskDescription };
    existingTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    showData();
    form.reset();
});
