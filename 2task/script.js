function calc() {
  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);
  const operation = document.querySelector("#operation").value.trim();

  if (Number.isNaN(num1)) {
    alert("Eror!");
    return;
  }
  if (Number.isNaN(num2)) {
    alert("Eror!");
    return;
  }

  if (operation === "+") {
    console.log(num1 + num2);
    alert(num1 + num2);
  } else if (operation === "-") {
    alert(num1 - num2);
  } else if (operation === "*") {
    alert(num1 * num2);
  } else if (operation === "/") {
    alert(num1 / num2);
  } else {
    alert("Неверно введены данные");
  }
}
calc.preventDefault();
document.getElementById("Button").onclick = calc();
