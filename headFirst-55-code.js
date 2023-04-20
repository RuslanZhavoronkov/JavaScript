var data = "name|phone|address";
var vals = data.split("|"); 
console.log("Split array is ", vals); //Метод split("|") преобразует строку в массив так как между аргументами запятая
//Split array is  [ 'name', 'phone', 'address' ]

var data = "name|phone|address";
var vals = data.split("|"); 
console.log("Split array is " +  vals);
//Split array is name,phone,address