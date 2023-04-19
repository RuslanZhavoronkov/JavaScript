function lieDetectorTest() {
    var lies = 0;

    var stolenDiamond = {};
    if (stolenDiamond) {
        console.log("You stole the diamond");
        lies++; // lies = 0 + 1 = 1
    }

    var car = {
        keysInPocket: null
    }
    if(car.keysInPocket) {   //условие ложно(null) - код выполняться не будет
        console.log("Uh oh, guess you stole the car");
        lies++;
    }
    if (car.emptyGasTank) { //условие ложно(undefined) - код выполняться не будет
        console.log("You drove the car after you stole it!");
        lies++;
    }

    var foundYouAtTheCrimeScene = [];
    if (foundYouAtTheCrimeScene) {
        console.log("A sure sign of guilt");
        lies++; //lies = 1 + 1 = 2
    }
    if (foundYouAtTheCrimeScene[0]) { //условие ложно(undefined) - код выполняться не будет
        console.log("Caught with a stolen item!");
        lies++;
    }

    var yourName = " "; //строка содержит пробел = непустая строка
    if (yourName) { 
        console.log ("Guess you lied about your name");
        lies++; //lies = 2 + 1 = 3
    }

    return lies;
}

//Вызовем функцию и сохраним результат в переменной
var numberOfLies = lieDetectorTest();

console.log("You told " + numberOfLies + " lies");
if (numberOfLies >=3) {
    console.log ("Guilty as charget");
}

//Guilty as charget (подозреваемый виновен)