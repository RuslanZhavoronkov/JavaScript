function addN(n) {
    var adder = function (x) {
        return n + x;
    }
    return adder;
}

var add2 = addN(5); //Возвращается adder. n=5
console.log(add2(10));//Вызываем функцию adder(10)
console.log(add2(100)); //Вызываем функцию adder(100)

//Функция addN(n) возвращает функцию adder