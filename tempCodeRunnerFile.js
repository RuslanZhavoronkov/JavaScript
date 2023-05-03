var migrating = true;

var fly = function (num) {             //функциональное выражение. Ссылка на функцию сохраняется в переменной fly
    for (var i = 0; i < num; i++) {
        console.log("Flying!");
    }
};

function quack (num) {                //Объявление функции. Ссылка на функцию сохраняется в переменной quack
    for (var i = 0; i < num; i++) {
        console.log("Quack!");
    }
}

var superFly = fly;
superFly(2);

var superQuack = quack;
superQuack(3);