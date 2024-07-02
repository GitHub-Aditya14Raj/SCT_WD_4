function addTask() {
    var input = document.getElementById("taskInput");
    var dateTimeInput = document.getElementById("taskDateTime");
    var taskText = input.value.trim();
    var dateTimeValue = dateTimeInput.value.trim();

    if (taskText !== "" && dateTimeValue !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="date-time">${dateTimeValue}</span>
            <div class="actions">
                <button onclick="markCompleted(this)">Completed</button>
                <button onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        ul.appendChild(li);
        input.value = "";
        dateTimeInput.value = "";
    } else {
        alert("Please enter both task and date/time.");
    }
}
function deleteTask(element) {
    var taskItem = element.closest("li");
    taskItem.remove();
}
// Function to edit a task
function editTask(element) {
    var taskItem = element.closest("li");
    var taskText = taskItem.querySelector("span");
    var dateTimeText = taskItem.querySelector(".date-time");
    
    // Prompt user to edit task and date/time
    var newText = prompt("Edit task:", taskText.textContent);
    var newDateTime = prompt("Edit date/time:", dateTimeText.textContent);

    if (newText !== null && newDateTime !== null) {
        taskText.textContent = newText.trim();
        dateTimeText.textContent = newDateTime.trim();
    }
}
