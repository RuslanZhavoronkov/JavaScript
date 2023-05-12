var numbersArray = [60, 50, 62, 58, 54, 54];
//Напишем функцию, которая будет сравнивать 2а значения массива (для сортировки по возрастанию)

function compareNumbers (num1, num2) {
   /* if (num1 > num2) {
        return 1; //1 значит надо переставлять 
    } else if (num1 === num2) {
        return 0; //переставлять не надо
    } else {
        return -1; //переставлят не надо 
    }*/

    //Сократим код функции сравнения
    return num1 - num2; // Если больше 0, то num1 и num2 надо переставлять (менять местами)
}




//Применим метод сортировки sort к массиву numbersArray

numbersArray.sort(compareNumbers);
console.log (numbersArray);