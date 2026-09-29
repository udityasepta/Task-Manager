

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const activeCount = document.getElementById("activeCount");
const totalCount = document.getElementById("totalCount");
const remainingCount = document.getElementById("remainingCount");

const clearCompleted = document.getElementById("clearCompleted");

const filterButtons = document.querySelectorAll(".filter");


// Tasks array

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";


// Save tasks

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// Add task

function addTask() {

    const title = taskInput.value.trim();

    if (title === "") {
        return;
    }

    const task = {
        id: Date.now(),
        title: title,
        completed: false
    };

    tasks.unshift(task);

    taskInput.value = "";

    saveTasks();

    renderTasks();
}


// Toggle task

function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {
            task.completed = !task.completed;
        }

        return task;

    });

    saveTasks();

    renderTasks();
}


// Delete task

function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();

    renderTasks();
}


// Filter tasks

function getFilteredTasks() {

    if (currentFilter === "active") {

        return tasks.filter(task => !task.completed);

    }

    if (currentFilter === "completed") {

        return tasks.filter(task => task.completed);

    }

    return tasks;
}


// Display tasks

function renderTasks() {

    const filteredTasks = getFilteredTasks();

    taskList.innerHTML = "";


    // Empty state

    if (filteredTasks.length === 0) {

        taskList.innerHTML = `
            <div class="empty">

                <div class="empty-icon">
                    ✓
                </div>

                <h3>No tasks here</h3>

                <p>
                    Add a task to get started.
                </p>

            </div>
        `;

    }


    // Create tasks

    filteredTasks.forEach(task => {

        const taskElement = document.createElement("div");

        taskElement.className = `task ${
            task.completed ? "completed" : ""
        }`;


        taskElement.innerHTML = `

            <button class="check">
                ${task.completed ? "✓" : ""}
            </button>

            <span class="task-title">
                ${task.title}
            </span>

            <button class="delete">
                ×
            </button>

        `;


        // Complete button

        taskElement
            .querySelector(".check")
            .addEventListener("click", () => {

                toggleTask(task.id);

            });


        // Delete button

        taskElement
            .querySelector(".delete")
            .addEventListener("click", () => {

                deleteTask(task.id);

            });


        taskList.appendChild(taskElement);

    });


    updateCounters();

}


// Update counters

function updateCounters() {

    const activeTasks =
        tasks.filter(task => !task.completed).length;


    activeCount.textContent = activeTasks;

    totalCount.textContent =
        `${tasks.length} ${
            tasks.length === 1 ? "task" : "tasks"
        }`;

    remainingCount.textContent =
        `${activeTasks} ${
            activeTasks === 1 ? "task" : "tasks"
        } remaining`;

}


// Filter buttons

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        renderTasks();

    });

});


// Clear completed

clearCompleted.addEventListener("click", () => {

    tasks = tasks.filter(task => !task.completed);

    saveTasks();

    renderTasks();

});


// Add task button

addBtn.addEventListener("click", addTask);


// Enter key

taskInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        addTask();
    }

});


// Initial render

renderTasks();

