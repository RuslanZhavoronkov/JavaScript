function myFunction(a, b) {
    return a + b;
}
var data = [1, 4];
var result = myFunction.apply(null, data);
console.log(result);// 5

//ES6 обеспечивает более простой способ, основанный на использовании оператора расширения
function myFunction(a, b) {
    return a + b;
}
let data = [1, 4];
let result = myFunction (... data);
console.log (result);// 5

//Определение значений массива как части другого массива

//Сделаем значения существующего массива частью другого массива при его создании
let array1 = [2, 3, 4];
let array2 = [1, ... array1, 5, 6, 7]; //разбиваем array1 на отдельные значения

console.log(array2); //[1, 2, 3, 4, 5, 6, 7];

//A.Копирование значений из одного массива в другой

//A.1 Как было до ES6
var newArray1 = [2, 3, 4];
var newArray2 = [1];

Array.prototype.push.apply(newArray2, newArray1);

console.log(newArray2); //[1, 2, 3, 4]

//A.2 по ES6
let newArray1 = [2, 3, 4];
let newArray2 = [1];

newArray2.push(... newArray1);
console.log(newArray2);//[1, 2, 3, 4];

//A.3 Расширение нескольких массивов
let arraY1 = [1];
let arraY2 = [2];
let arraY3 = [... arraY1, ... arraY2, ... [3, 4]];
let arraY4 = [5];

function myFunction(a, b, c, d, e) {
    return a + b + c + d + e;
}

let result = myFunction(... arraY3, ... arraY4);
console.log(result); //15