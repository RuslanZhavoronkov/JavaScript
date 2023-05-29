//Присваивание значений переменных свойствам объекта ES5
var x = 1, y = 2;
var object = {
    x:x,
    y:y
}

console.log(object.x); //1

//Присваивание значений переменных свойствам объекта ES6

let x = 1, y = 2;
let object = {x, y};
console.log(object.x); //1
 
//наоборот присваивание значений итерируемого объекта переменным
let{i, j} = {i: 1, j: 5};
console.log(i);
console.log(j);

//Определение методов объекта ES6
let newObject = {
    myFunction () { //Без ключевого слова "function" (компактная запись функции). В дальнейшем такая запись позволит использовать ключевое слово super
        console.log("Hello World!");
    }
};

newObject.myFunction(); //Hello World!

//Вычисляем имена свойств объектов по ES5
var oneObject = {};
oneObject["first" + "Name"] = "Eden";
//console.log(oneObject["first" + "Name"]); //Eden
console.log(oneObject.firstName);//Eden

//Вычисляем имена свойств по ES6
let myObject = {
    ["first" + "Name"]: "Eden"
};
console.log(myObject.firstName);//Eden

