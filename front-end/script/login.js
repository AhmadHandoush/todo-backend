const form = document.getElementById("loginFormL");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  for (item of formData) {
    console.log(item[0], item[1]);
  }
  fetch("http://localhost/zomato_backend/signin.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
});
