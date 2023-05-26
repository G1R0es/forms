let area = document.querySelector("#area");
let local = JSON.parse(localStorage.getItem("value"));
area.value = local;
area.addEventListener("input", save);

function save() {
  val = area.value;
  console.log(val);
  localStorage.setItem("value", JSON.stringify(val));
}
