//Домашка 101
//1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.

function greet(name) {
  return `Hello "${name}"`;
}

console.log(greet("Алексей")); 


//2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.

const numbers = [5, 12, 8, 20, 3, 15];

// Функция, которая принимает массив чисел
function logNumbersGreaterThanTen(arr) {
    // Перебираем массив
    arr.forEach(num => {
        // Если число больше 10, выводим его в консоль
        if (num > 10) {
            console.log(num);
        }
    });
}

// Вызываем функцию с массивом
logNumbersGreaterThanTen(numbers);

// 3) Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора. При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1. То есть мы получаем разницу между первым и вторым аргументом. Запишите результат выполнения функции в переменную и выведите в консоль. 

function calculate(num1, num2, operator) {
  if (operator === 'plus') {
      return num1 + num2;
  } else if (operator === 'minus') {
      return num1 - num2;
  } else if (operator === 'multiply') {
      return num1 * num2;
  } else if (operator === 'divide') {
      return num1 / num2;
  } else {
      return 'Invalid operator';
  }
}

// Пример вызова функции 
//const result = calculate(2, 3, 'minus');
//console.log(result); // Вывод: -1

//const result = calculate(2, 3, 'plus');
//console.log(result); // Вывод: 5

//const result = calculate(2, 3, 'multiply');
//console.log(result); // Вывод: 6

const result = calculate(2, 3, 'divide');
console.log(result); // Вывод: 0.6666666666666666

