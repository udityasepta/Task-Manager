# Task Manager

A simple and modern **Task Manager web application** built using **HTML, CSS, and JavaScript**.

The application allows users to create, complete, delete, and filter tasks. Tasks are stored in the browser using **Local Storage**, so they remain available even after refreshing the page.

## Features

* Add new tasks
* Mark tasks as completed
* Delete tasks
* Filter tasks:

  * All
  * Active
  * Completed
* Display active task count
* Display total task count
* Clear all completed tasks
* Save tasks using Local Storage
* Responsive design
* Clean and minimalistic UI

## Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive design
* **JavaScript** – Application logic and DOM manipulation
* **Local Storage** – Persistent task storage

## Project Structure

```text
task-manager/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager.git
```

### 2. Open the project

Go into the project folder:

```bash
cd task-manager
```

### 3. Run the application

No installation or build tool is required.

Simply open:

```text
index.html
```

in your web browser.

## How It Works

### Add Task

Enter a task in the input field and click **Add Task**.

Example:

```text
Learn JavaScript
```

The task will appear in the task list.

### Complete Task

Click the circular checkbox next to a task.

The task will be marked as completed and the text will be crossed out.

### Delete Task

Click the **×** button to remove a task.

### Filter Tasks

You can filter tasks using:

```text
All
Active
Completed
```

### Local Storage

Tasks are stored in the browser using:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

When the application starts, the saved tasks are loaded using:

```javascript
localStorage.getItem("tasks");
```

This means tasks remain available after a page refresh.

## JavaScript Concepts Used

This project demonstrates several important JavaScript concepts:

* Variables
* Arrays
* Objects
* Functions
* Arrow functions
* `map()`
* `filter()`
* DOM manipulation
* Event listeners
* Template literals
* `localStorage`
* Conditional rendering
* Keyboard events

## Example Task Object

Each task is stored as an object:

```javascript
{
    id: 1727351234567,
    title: "Learn JavaScript",
    completed: false
}
```

When completed:

```javascript
{
    id: 1727351234567,
    title: "Learn JavaScript",
    completed: true
}
```

## Future Improvements

The project can be extended with:

* Edit task functionality
* Task due dates
* Task priority
* Categories
* Search tasks
* Dark mode
* Drag-and-drop task ordering
* Backend/database integration
* User authentication

## Project Goal

The main goal of this project is to practice **HTML, CSS, and JavaScript fundamentals** while building a practical application with persistent browser storage.

## Author

**Your Name**

GitHub: `https://github.com/udityasepta`

---

⭐ If you find this project useful, consider giving it a star.
