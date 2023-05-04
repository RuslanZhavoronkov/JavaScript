function fun (echo) {
    console.log (echo);
}

fun("hello"); //hello

function boo (aFunction) {
    aFunction ("boo");
}

boo (fun); //boo

console.log (fun); //function fun (echo)

fun(boo); // function boo

var moreFun = fun //сохраняем в переменной moreFun ссылку на функцию fun
moreFun("hello again"); //hello again



function echoMaker() {
    return fun; // возвращает переменную fun, содержащую ссылку на функцию
}

var bigFun = echoMaker(); //возвращается переменная fun, содержащая ссылку на функцию

bigFun("Is there an echo?");// Is there an echo