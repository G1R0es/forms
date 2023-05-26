let selectOption = "#week.option[week.selectIndex]";
alert(selectOption.value);
alert(selectOption.text);

const newOption = new Option("Воскресенье", "sunday", true, true);
week.append(newOption);
