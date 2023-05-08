function makeCounter () {
    var count = 0;

    function counter () {
        count = count + 1;
        return count;
    }

    return counter; //возвращаем функцию counter (переменную counter со ссылкой на функцию)
}

var doCount = makeCounter(); //возвращаем функцию counter (переменную counter со ссылкой на функцию)
console.log(doCount());
console.log(doCount());
console.log(doCount());