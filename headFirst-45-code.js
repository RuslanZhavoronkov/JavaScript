if('99' == 99){
    console.log("A number equals a string");
} else {
    console.log ("No way a number equals a string");
}

//Случай №1 сравнение числа со строкой
console.log(99 == "vanilla"); //JS "vanilla" преобразует в Nan

//Случай №2 сравнение булевского значения с любым другим типом
console.log(1 == true);
console.log(0 == false);
console.log("1" == true); //строка сравнивается с булевским значением

//Случай №3 сравнение значения undefined и значения null
console.log(undefined == null);

//Сравнение числа с пустой строкой
console.log(1 == "");