// Select DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const allTasks = document.getElementById("allTasks");
const completedTasks = document.getElementById("completedTasks");

// Function to Add Task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = createTaskItem(taskText, false);
    allTasks.appendChild(taskItem);
    taskInput.value = ""; // Clear input
});

// Function to Create Task Item
function createTaskItem(taskText, isCompleted) {
    const task = document.createElement("li");
    task.className = "task";
    if (isCompleted) task.classList.add("completed");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    if (isCompleted) {
        const badge = document.createElement("span");
        badge.textContent = "Completed";
        badge.className = "badge";
        taskSpan.appendChild(badge);
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isCompleted;
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            task.classList.add("completed");
            completedTasks.appendChild(task);
        } else {
            task.classList.remove("completed");
            allTasks.appendChild(task);
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        task.remove();
    });

    task.appendChild(checkbox);
    task.appendChild(taskSpan);
    task.appendChild(deleteButton);

    return task;
}
