var migrating = true;

var fly = function (num) {
    var sound = "Flying";

    function wingFlapper () { //Добавляется объявление функций с именем wingFlapper внутри функционального выражения fly
        console.log(sound);
    }

    for (var i = 0; i < num; i++) {
        wingFlapper(); //Здесь эта функция вызывается
    }
};

function quack(num) {
    var sound = "Quack";

    var quacker = function () { //Здесь добавляется функциональное выражение, присваемое переменной quacker внутри объявления функции quack
        console.log (sound);
    };

    for (var i = 0; i < num; i++) {
        quacker();// А здесь эта функция вызывается
    }
}

if (migrating) { //Этот код перемещен в конец, чтобы избежать ошибки при вызове fly
    quack(4);
    fly(4);
}