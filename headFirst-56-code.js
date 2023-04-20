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
    var first = phoneNumber.substring(0,3); // создаем подстроку с 0 по 3 индекс
    var second = phoneNumber.substring(4); // создаем подстроку с 4 по 7 индекс

    if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)){
        return false;
    }
    return true;
}
validate("123-4567"); // true


//Спецификация поменялась телефонный номер может содержать, а может и не содержать дефис

//Комната Ларри
function validate (phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {
        return false;
    }

    for (var i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.length === 8 && phoneNumber.charAt(i) !== "-") {
                return false;
            } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
                return false;
            }

        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}

validate(1234567); //true


//Комната Брэда
function validate (phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {
        return false;
    }

    var first = phoneNumber.substring(0,3);
    var second = phoneNumber.substring(phoneNumber.length - 4);

    if (isNaN(first) || isNaN(second)) {
        return false;
    }

    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === "-");
    }
    return true;
}

validate(1234567);

//код Эмми
function validate (phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/);
}
validate(1234567);