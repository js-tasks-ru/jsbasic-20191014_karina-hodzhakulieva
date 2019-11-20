/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let result = m;
  for (let x = 1; x < n; x++) {
    result *= m;
  }
  return result;
}

let firstNumber = prompt('Введите число', '');
let secondNumber = prompt('Введите его степень', '');

if (secondNumber < 1 || ((secondNumber ^ 0) === secondNumber)) {
  alert(`Число ${secondNumber} должно быть целым, положительным числом`);
} else {
  alert('Ответ: ' + pow(firstNumber, secondNumber));
}