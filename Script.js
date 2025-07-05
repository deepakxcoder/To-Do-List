function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Create buttons container
    const buttonGroup = document.createElement("div");
    buttonGroup.className = "task-buttons";
  
    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.title = "Mark as Complete";
    completeBtn.onclick = function () {
      li.classList.toggle("completed");
    };
  
    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.title = "Edit Task";
    editBtn.onclick = function () {
      const newTask = prompt("Edit your task:", li.firstChild.textContent);
      if (newTask !== null && newTask.trim() !== "") {
        li.firstChild.textContent = newTask.trim();
      }
    };
  
    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.title = "Delete Task";
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };
  
    // Append buttons
    buttonGroup.appendChild(completeBtn);
    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);
    li.appendChild(buttonGroup);
    taskList.appendChild(li);
  
    // Clear input
    taskInput.value = "";
  }
  