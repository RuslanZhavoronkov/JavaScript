/*const pi = 3.141;
var r = 2;

console.log (pi * r * r); //12.564;

pi = 12;//TypeError

console.log(pi);

let a = 12;
a = 15;
console.log(a);//15

var b = 5;
b = 7;
console.log(b);

var c = 7;
var c = 8;
console.log(c);//8

let v = 7;
let v = 14; //TypeError
console.log(v);

const i = 5;
const i = 7;
console.log(i);//TypeError

const r = 5;
r = 7;
console.log(r);*/

const a = 12; //доступна глобально

function myFunction() {
    console.log (a); //12
    const b = 13; //доступна в пределах функции

    if (true) {
        const c = 14; //доступна только в блоке if
        console.log (b); //13 (так как переменная "b" доступна в пределах функции)
    }
    console.log (c);//ReferenceError (так как переменная "c" объявлена в блоке if и команда console.log(c) за пределами этого блока)
   
}
myFunction();
