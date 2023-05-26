let form = document.querySelector("form");
let usersData = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.password.value === form.passwordRepeat.value) {
    let name = form.username.value;
    let email = form.email.value;
    let password = form.password.value;
    usersData.push({ name, email, password });
  }
  console.log(usersData);
});
