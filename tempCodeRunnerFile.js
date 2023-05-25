const a = 12; //доступна глобально

function myFunction() {
    console.log (a); //12
    const b = 13; //доступна в пределах функции

    if (true) {
        const c = 14; //доступна только в блоке if
        console.log (b); //13 (так как переменная "b" доступна в пределах функции)
        console.log (c);
    }
   
}
myFunction();