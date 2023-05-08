var secret = "007";

function getSecret() {  
    var secret = "008";

    function getValue() {
        return secret;
    }
    return getValue(); //Возвращаем вызов функции, которая возвращает значение "008"
}

//Вызываем функцию getSecret

console.log(getSecret());

var secret = "007";

function getSecret() {
    var secret = "008";

    function getValue() {
        return secret;
    }

    return getValue; //Возвращаем переменную, содержащую функцию 
}

var getValueFun = getSecret(); //Возвращаем переменную, содержащую функцию(getValue) и присваиваем ее к другой переменной getValueFun
console.log (getValueFun());  //Теперь переменная getValueFun содержит ссылку на функцию.
                              //Вызываем функцию getValueFun()