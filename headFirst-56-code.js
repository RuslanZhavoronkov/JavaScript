//Написать код, который будет принимать или отвергать номер телефона. Телефонный номер должен состоять из семи цифр  разделенных дефисом (8символов)
// 3 символ должен быть дефис
//в комнате Лари
function validate (phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }

    for (var i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.charAt(i) !== "-"){ //Сначала убеждаемся в том, что символ 3 содержит дефис
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) { //А затем проверяем, что каждый символ с индексами 0-2 и 4-6 содержит цифру
            return false;
        }

    }
    return true;
}
validate("123-4567"); //true


//В комнате Брэда
function validate(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
    var first = phoneNumber.substring(0,3);
    var second = phoneNumber.substring(4);

    if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)){
        return false;
    }
    return true;
}
validate("123-4567"); // true