var winner = function () {
    console.log ("WINNER!");
}

var loser = function () {
    console.log ("LOSER!");
}

//Простой тест
//winner();

//Присвоение ссылок переменным
var a = winner;
var b = loser;
var c = loser;

/*//Тест
a();
b();
c();*/

//Проверяем удачу в игре наперстки
c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;

//Test
a();

