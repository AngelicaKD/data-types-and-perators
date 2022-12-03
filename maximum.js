// Задание 1
let money = +prompt("Введите сумму вклада");

function deposit() {
   return 0.0083 * money  + "накопления через 2 месяца";
}

alert(deposit());

// Задание 2
console.log(2 && 0 && 3); //0
console.log(2 || 0 || 3); //2
console.log(2 && 0 || 3); //3