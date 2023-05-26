let select = document.querySelector("select");
let input = document.querySelector("input");

select.addEventListener("change", function () {
  let selectedOption = select.options[select.selectedIndex];
  input.value = selectedOption.text;
});
