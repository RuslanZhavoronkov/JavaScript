(function(food) {                    //Если не заключить функциональное выражение в круглые скобки, интерпретатор JavaScript,                                     
    if (food === "cookies") {        //будет рассматривать его как объявление, а не как функциональное выражение
        console.log("More please");
    } else if (food === "cake") {
        console.log("Yum yum");
    }
}) ("cookies");

var eat = function (food) {
    if (food === "cookies") {
        console.log("More please");
    } else if (food === "cake") {
        console.log("Yum yum");
    }
};

eat("cookies");
