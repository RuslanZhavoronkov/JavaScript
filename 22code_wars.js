/*Ваша задача — создать функцию, которая выполняет четыре основные математические операции.

Функция должна принимать три аргумента - операция(строка/символ), значение1 (число), значение2(число).
Функция должна возвращать числовой результат после применения выбранной операции.*/

function basicOp(operation, value1, value2)
{
  // Code
  return eval(value1+operation+value2);
}

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

function basicOp(o, v1, v2)
{
 if (o === '+') return v1 + v2;
 if (o === '-') return v1 - v2;
 if (o === '/') return v1 / v2;
 if (o === '*') return v1 * v2;
}