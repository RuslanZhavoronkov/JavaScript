//Создадим объект дату и присвоим его переменной now, используя встроенный конструктор Date
var now = new Date();
var dateString = now.toString();
console.log(dateString);
var theYear = now.getFullYear();
console.log(theYear);
var theDayOfWeek = now.getDay();

var birthday = new Date("May 1, 1987 08:03 pm");
console.log(birthday);

//Встроенный объект Array
var emptyArray = new Array ();
emptyArray[0] = 99;
console.log (emptyArray);

var oddNumbers = new Array(3);
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;
oddNumbers.reverse();//перестановка значений массива в обратном порядке

var aString = oddNumbers.join("-");//метод создает строку из массива, разделяя их последовательностью "-"

var areAllOdd = oddNumbers.every(function(x) {
    return ((x % 2) !== 0);
});

console.log(areAllOdd);

var items = new Array ("a", "b", "c");
console.log(items);



