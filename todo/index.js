document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todoInput");
  const addButton = document.getElementById("Add");
  const listContainer = document.querySelector(".todo_List_Output");
  let tasks = []; // Array to store tasks

  addButton.addEventListener("click", () => {
    const task = input.value; // Get and trim the input value
    if (task) {
      tasks.push(task); // Add the task to the array
      input.value = ""; // Clear the input field
      updateList(); // Update the displayed list
    }
  });

  // Function to update the displayed list of tasks
  function updateList() {
    clearList(); // Clear the current list
    if (tasks.length > 0) {
      tasks.forEach((task, index) => {
        const listItem = createListItem(task, index); // Create a list item for each task
        console.log(listItem, "listItem");
        listContainer.appendChild(listItem); // Append the list item to the container(parentNode to childNode)
      });
    }
  }

  // Function to clear the current list
  function clearList() {
    listContainer.innerHTML = ""; // Clear the current content of the list container
  }

  // Function to create a list item for a task
  function createListItem(task, index) {
    const listItem = document.createElement("div");
    listItem.className = "todo-item"; // Add a class for styling

    const taskText = document.createElement("span");
    taskText.textContent = task; // Set the text content of the task

    const deleteItem = createDeleteButton(index); // Create a delete button

    listItem.appendChild(taskText); // Append the task text
    listItem.appendChild(deleteItem); // Append the delete button
    return listItem; // Return the constructed list item
  }

  // Function to create a delete button for a task
  function createDeleteButton(index) {
    const deleteItem = document.createElement("button");
    deleteItem.textContent = "Delete"; // Set the text for the delete button
    deleteItem.className = "delete-item"; // Add a class for styling

    deleteItem.addEventListener("click", () => {
      tasks.splice(index, 1); // Remove the task from the array
      updateList(); // Update the displayed list
    });

    return deleteItem; // Return the constructed delete button
  }
});
