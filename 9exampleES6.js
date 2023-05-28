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

let [g,  , k] = [1, 2, 3];
console.log(g);
console.log(k);

//Использование оператора расширения в деструктивном присваивании массивов
let[l, ...m] = [1, 2, 3, 4, 5, 6];
console.log(l); //1
console.log(m.join()); //[2, 3, 4, 5, 6]
console.log(Array.isArray(m));//Переменная "m" преобразована в массив с остальными значениями итерируемого объекта

let array1 = [1];
let array2 = [2];
let array3 = [... array1, ...array2, ... [3, 4]];
let array4 = [5];

function myFunction (a, b, c, d, e) {
    return a + b + c + d + e;
}

let result = myFunction(... array3, ... array4);
console.log(result);

//С помощью оператора дополнения можно также проигнорировать значения итерируемого объекта

let[p, , , ...r] = [1, 2, 3, 4, 5, 6];
console.log(p);//1
console.log(r);//[4, 5, 6]

//Значения по умолчанию для переменных
let[v, x, z = 3] = [1, 2];
console.log(z);

//Деструктивное присваивание вложенных массивов
let[q, t, [j, i]] = [1, 2, [3, 4]];
console.log(q);
console.log(t);
console.log(j);
console.log(i);