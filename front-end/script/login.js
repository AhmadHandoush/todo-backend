const form = document.getElementById("loginFormL");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  for (item of formData) {
    console.log(item[0], item[1]);
  }
  fetch("http://localhost/todo-back/back-end/signin.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.data.status === "logged in") {
        window.location.href("http://127.0.0.1:5500/front-end/pages/main.html");
      }
    });
});
