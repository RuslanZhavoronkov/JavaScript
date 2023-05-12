/*function makeTimer (doneMessage, n) {
    setTimeout(function () {   //Метод setTimeout сохраняет функцию с окружением (где находится значение для свободной переменной doneMessage) 
        console.log (doneMessage);// переменная doneMessage свободная
    }, n);
}

makeTimer("Cookies are done", 1000); //происходит замыкание в методе setTimeout, потому что вместе с функцией передается окружение,
                                    //связывающее свободную переменную doneMessage со строкой "Cookies are done"
*/

function handler() {
    console.log(doneMessage);
}


function makeTimer (doneMessage, n) { //Замыкания не происходит   
    
    setTimeout(handler, n);//так область действия функции handler локальна
}


makeTimer("Cookies are done", 1000);