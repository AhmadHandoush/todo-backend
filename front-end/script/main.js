const form = document.getElementById("addForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  for (item of formData) {
    console.log(item[0], item[1]);
  }
  fetch("http://localhost/todo-back/back-end/createTask.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => window.location.reload());
});
