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
validate("123-4567");