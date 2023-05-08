var justAVar = "Oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
    var justAVar = "Just an every day LOCAL";

    function inner() {
        return justAVar;
    }

    return inner; //Возвращаем переменную justAVar, содержащую внутреннюю функцию 
}

var innerFunction = whereAreYou(); //Возвращается переменная inner, содержащая функцию внутренную функцию 
var result = innerFunction();
console.log(result);