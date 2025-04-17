function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    // Create the "X" button
    let removeButton = document.createElement("span");
    removeButton.textContent = " ❌";
    removeButton.classList.add("remove-btn");
    li.appendChild(removeButton);

    // Remove task on click
    removeButton.onclick = function () {
        li.remove();
    };

    // Hover effect to show "X"
    li.onmouseover = function () {
        removeButton.style.display = "inline";
    };
    li.onmouseout = function () {
        removeButton.style.display = "none";
    };

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

// Add event listener for "Enter" key
document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});






