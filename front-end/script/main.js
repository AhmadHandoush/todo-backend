// let input = document.querySelector(".input");
// let submit = document.querySelector(".add");
// let tasksDiv = document.querySelector(".tasks");

// // Empty Array To Store The Tasks
// let arrayOfTasks = [];

// // Check if Theres Tasks In Local Storage
// if (localStorage.getItem("tasks")) {
//   arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
// }

// // Trigger Get Data From Local Storage Function
// getDataFromLocalStorage();

// // Add Task
// submit.onclick = function () {
//   if (input.value !== "") {
//     addTaskToArray(input.value); // Add Task To Array Of Tasks
//     input.value = ""; // Empty Input Field
//   }
// };

// tasksDiv.addEventListener("click", (e) => {
//   if (e.target.classList.contains("del")) {
//     // Remove Task From Local Storage
//     deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
//     // Remove Element From Page
//     e.target.parentElement.remove();
//   }
//   // Task Element
//   if (e.target.classList.contains("task")) {
//     // Toggle Completed For The Task
//     toggleStatusTaskWith(e.target.getAttribute("data-id"));
//     // Toggle Done Class
//     e.target.classList.toggle("done");
//   }
// });

// function addTaskToArray(taskText) {
//   // Task Data
//   const task = {
//     id: Date.now(),
//     title: taskText,
//     completed: false,
//   };

//   arrayOfTasks.push(task);

//   addElementsToPageFrom(arrayOfTasks);
//   // Add Tasks To Local Storage
//   addDataToLocalStorageFrom(arrayOfTasks);
// }

// function addElementsToPageFrom(arrayOfTasks) {
//   tasksDiv.innerHTML = "";

//   arrayOfTasks.forEach((task) => {
//     // Create Main Div
//     let div = document.createElement("div");
//     div.className = "task";

//     // Check If Task is Done
//     if (task.completed) {
//       div.className = "task done";
//     }
//     div.setAttribute("data-id", task.id);
//     div.appendChild(document.createTextNode(task.title));
//     // Create Delete Button
//     let span = document.createElement("span");
//     span.className = "del";
//     span.appendChild(document.createTextNode("Delete"));
//     div.appendChild(span);

//     tasksDiv.appendChild(div);
//   });
// }

// function addDataToLocalStorageFrom(arrayOfTasks) {
//   window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
// }

// function getDataFromLocalStorage() {
//   let data = window.localStorage.getItem("tasks");
//   if (data) {
//     let tasks = JSON.parse(data);
//     addElementsToPageFrom(tasks);
//   }
// }

// function deleteTaskWith(taskId) {
//   arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
//   addDataToLocalStorageFrom(arrayOfTasks);
// }

// function toggleStatusTaskWith(taskId) {
//   for (let i = 0; i < arrayOfTasks.length; i++) {
//     if (arrayOfTasks[i].id == taskId) {
//       if (arrayOfTasks[i].completed == false) {
//         arrayOfTasks[i].completed = true;
//       } else {
//         arrayOfTasks[i].completed = false;
//       }
//     }
//   }
//   addDataToLocalStorageFrom(arrayOfTasks);
// }
const addbtn = document.getElementById("add");
const todo = document.getElementById("todo");

const addTodo = () => {
  let todoInput = todo.value.trim();
  if (todoInput !== "") {
    fetch("api.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "action=create&todo=" + encodeURIComponent(todoInput),
    })
      .then((response) => {
        if (response.ok) {
          fetchTodos(); // Refresh todos list
        } else {
          console.error("Failed to add todo item");
          alert("Failed to add todo item");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while adding todo");
      });
  }
};

addbtn.addEventListener("click", addTodo);
