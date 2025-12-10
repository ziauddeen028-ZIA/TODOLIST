let taskInput = document.getElementById("list-input");
let addbutton = document.getElementById("add");
let listItem = document.getElementById("list-container");


addbutton.addEventListener("click", addTask);

loadTasks();

function addTask() {
    let task = taskInput.value.trim();

    if (task) {
        createTaskElement(task);
        taskInput.value = " ";
        saveTasks();
    }
    else {
        alert("Please Enter Task...!")
    }
}

function createTaskElement(task) {
    let listElement = document.createElement("li");
    // listElement.textContent = task;
    let taskText = document.createElement("span");
    taskText.textContent=task;

    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttons");

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.classList.add("delete");

    let finishbtn = document.createElement("button");
    finishbtn.textContent = "finish";
    finishbtn.classList.add("finish");

    deletebtn.addEventListener("click", () => {
        listItem.removeChild(listElement);
        saveTasks();
    });

    finishbtn.addEventListener("click", () => {
        listElement.style.backgroundColor = "lightgreen";
        finishbtn.style.display = "none";
    });

    buttonDiv.appendChild(deletebtn);
    buttonDiv.appendChild(finishbtn);

    listElement.appendChild(taskText);
    listElement.appendChild(buttonDiv);

    listItem.appendChild(listElement);
}

function saveTasks() {
    let tasks = [];
    listItem.querySelectorAll("li").forEach(function (item) {
        tasks.push(item.textContent.replace('delete', '').replace('finish', '').trim());
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(createTaskElement);
}