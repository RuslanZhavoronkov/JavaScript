//Образец #1
var secret = "007";

function getSecret() {  
    var secret = "008";

    function getValue() {
        return secret;
    }
    return getValue; //Возвращаем вызов функции, которая возвращает значение "008"
}

//Вызываем функцию getSecret

console.log(getSecret());

//Образец #2
var secret = "007";

function getSecret() {
    var secret = "008";

    function getValue() {
        return secret;
    }

    return getValue; //Возвращаем переменную, содержащую функцию 
}

var getValueFun = getSecret(); //Возвращаем переменную, содержащую функцию(getValue) и присваиваем ее к другой переменной getValueFun
console.log (getValueFun());  //Теперь переменная getValueFun содержит функцию (переменную (getValue) со ссылкой на функцию getValue).
                              //Вызываем функцию getValueFun()


//Образец #3 Лексическая область действия
var justAVar = "Oh, don't you worry about it, I'm GLOBAL"// глобальная переменная justAVar

function whereAreYou () {
    var justAVar = "Just an every day LOCAL"; //локальная переменная justAVar
    return justAVar;
}
var result = whereAreYou();//Возвращается содержимое локальной переменной justAVar
console.log(result);


//Образец #4 Лексическая область действия (добавим вложенную функцию)
var justAVar = "Oh, dont't you worry aboit it, I'm GLOBAL";

function whereAreYou () {
    var justAVar = "Just an every day LOCAL";

    function inner () {
        return justAVar;
    }

    return inner(); //Вызываем функцию и возвращаем результат
}

var result = whereAreYou(); //При вызове WhereAreYou, вызывается внутренняя функция inner, которая возвращает значение локальной переменной  
console.log(result);

//Образец #5 
var justAVar = "Oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
    var justAVar = "Just an every day LOCAL";

    function inner() {
        return justAVar;
    }

    return inner; //Возвращаем переменную justAVar, содержащую внутреннюю функцию 
}

var innerFunction = whereAreYou(); //Возвращается переменная inner, содержащая функцию внутренную функцию 
var result = innerFunction();//вызываем внутреннюю функцию и получаем значение локальной переменной
console.log(result);