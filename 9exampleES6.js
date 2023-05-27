//Деструктивное присвоение массивов

//1 способ
let myArray = [1, 2, 3];
let a, b, c; //создаем переменные a, b, c 
[a, b, c] = myArray; //создаем литерал массива из переменных и присваиваем ему массив myArray(итерируемый объект)

console.log(a);
console.log(b);
console.log(c);
console.log(a + b + c);

//2 способ
let newArray = [1, 2, 3];
let[d, e, f] = newArray;

console.log(d);
console.log(e);
console.log(f);