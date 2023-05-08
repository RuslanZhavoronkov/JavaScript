var secret = "007";

function getSecret() {
    var secret = "008";

    function getValue() {
        return secret;
    }

    return getValue; //Возвращаем переменную, содержащую функцию 
}

var getValueFun = getSecret();
console.log (getValueFun());