let a = 12; //доступна глобальна

function myFunction() {
    console.log(a);
    let b = 13; //доступна в пределах функции

    if(true) {
        let c = 14; //доступна только в блоке if
        console.log(b);
    }
    console.log(c);
}

myFunction(); 
//12
//13
//c доступна только в блоке if
             