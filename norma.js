// Задание 1
 let userMoney = +prompt("Введите сумму", "");
 let chocolateСost = +prompt("Введите цену", "");

function store() {
   let chocolate  = parseInt(userMoney / chocolateСost);
   let balance = (userMoney % chocolateСost).toFixed(2);
   return "Количество шоколада " + chocolate +"\nОстаток " + balance;
}

alert(store());

// Задание 2
let num = prompt("Введите число")
let newNum = num.split('').reverse().join('');
alert(newNum);