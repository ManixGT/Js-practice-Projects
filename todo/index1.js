const dropdownbtn = document.querySelector(".dropdown-btn");
const elements = document.querySelector(".drp-element");
const inputField = document.querySelector(".input-field"); //*Input Field
const inputAddBtn = document.querySelector(".input-btn"); //*InputAddBtn
const todoList = document.querySelector("#todoList-input"); //* todoList input

const cardCompletionState = ["All", "Completed", "Remaining"];

let toDoArr = [];
let selectedFilter = "All";
let dropdownToggle = false;

//*Dropdown toggle feature only
dropdownbtn.addEventListener("click", () => {
  dropdownElements(!dropdownToggle);
});

const dropdownElements = (dropdownToggle) => {
  elements.innerHTML = "";
  if (dropdownToggle) {
    cardCompletionState.forEach((data) => {
      const button = document.createElement("button");
      button.className = "block px-4 py-2 text-gray-800 hover:bg-gray-200";
      button.innerHTML = data;
      button.addEventListener("click", () => {
        elements.innerHTML = data;
        dropdownToggle = false;
        //! START FROM HERE
        todoListFilter({ data });
      });
      elements.appendChild(button);
    });
  } else {
    elements.innerHTML = " ";
  }
};

//* Input Button
inputAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let input = inputField.value;
  if (input.trim) {
    //*Tranforming the data from only 'input'->{ text: inputField.value, status: "All" }
    toDoArr.push({ text: inputField.value, status: "All" });
  }
  todoListCreation(toDoArr);
  inputField.value = "";
});

const todoListCreation = (params) => {
  const { data } = params;
  console.log(params);

  todoList.innerHTML = ""; // Clear existing items
  params.forEach((data) => {
    const listItem = document.createElement("div");
    listItem.className =
      "todo-list flex justify-between p-5 text-center w-3/6 m-auto bg-white border-b-2 border-slate-500";
    listItem.innerHTML = `
      <span class='actualData'>${data.text}</span>
      <div class="buttons flex space-x-2">
        <button class="correct bg-red-600 p-1 rounded-md hover:bg-white border border-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-check-big"
          >
            <path d="M21.801 10A10 10 0 1 1 17 3.335" />
            <path d="m9 11 3 3L22 4" />
          </svg>
        </button>
        <button class="edit bg-red-600 p-1 rounded-md hover:bg-white border border-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-settings"
          >
            <path
              d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
            />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
        <button class="delete bg-red-600 p-1 rounded-md hover:bg-white border border-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-trash"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
        </button>
      </div>
    `;
    todoList.appendChild(listItem);
  });
};

//filter
const todoListFilter = (params) => {
  const { data } = params;
  let filteredArr = toDoArr.filter((item) => {
    item.status === data;
  });
  todoListCreation(filteredArr);
};

// Event delegation for the correct button
todoList.addEventListener("click", (event) => {
  const listItem = event.target.closest(".todo-list");
  if (listItem) {
    const itemText = listItem.querySelector(".actualData").innerText;

    if (event.target.closest(".correct")) {
      listItem.querySelector(".actualData").classList.toggle("line-through");
    } else if (event.target.closest(".delete")) {
      toDoArr = toDoArr.filter((item) => item.text !== itemText);
      todoListCreation(toDoArr);
    }
    // Add logic for edit functionality if needed
  }
});
