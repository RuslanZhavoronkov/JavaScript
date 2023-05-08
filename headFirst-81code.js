function makeCounter () {
    var count = 0;

    function counter () {
        count = count + 1;
        return count;
    }

    return counter; //возвращаем функцию counter (переменную counter со ссылкой на функцию)
}

var doCount = makeCounter(); //получаем замыкание функцию с окружением 
                            //возвращаем функцию counter вместе с окружением содержащим свободную переменную count (переменную counter со ссылкой на функцию)
console.log(doCount());
console.log(doCount());
console.log(doCount());
