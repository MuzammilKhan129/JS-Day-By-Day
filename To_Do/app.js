const form = document.getElementById("todo-form");
const listItem = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");

document.addEventListener("DOMContentLoaded", loadTask);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const TaskText = taskInput.value.trim();

    if (TaskText){
        addTask(TaskText);
        taskInput.value = "";
    };
});


function addTask(TaskText, completed = false){
    const li = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = completed;

    const span = document.createElement("span");
    span.textContent = TaskText;
    if (completed) span.classList.add("completed");

    const delBtn = document.createElement('i');
    delBtn.className = 'fa-solid fa-trash';

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(delBtn);

    listItem.appendChild(li);

    saveTask();
};


listItem.addEventListener("click", (e) => {
    if (e.target.tagName === 'INPUT' && e.target.type === "checkbox"){
        e.target.nextElementSibling.classList.toggle("completed", e.target.checked);
        saveTask();
    };

    if (e.target.tagName === "I"){
        e.target.parentElement.remove();
        saveTask();
    }
});


function saveTask(){
    const tasks = [];
    listItem.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.querySelector("span").textContent,
            completed: li.querySelector('input[type="checkbox"]').checked
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


function loadTask(){
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.forEach(task => addTask(task.text, task.completed));
};









