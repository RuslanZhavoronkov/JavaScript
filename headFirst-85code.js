function makeTimer (doneMessage, n) {
    setTimeout(function () {   //Метод setTimeout сохраняет функцию со свободным окружением (со свободной переменной doneMessage) 
        console.log (doneMessage);
    }, n);
}

makeTimer("Cookies are done", 1000); //происходит замыкание в методе setTimeout, потому что вместе с функцией передается окружение,
                                    //связывающее свободную переменную doneMessage со строкой "Cookies are done"