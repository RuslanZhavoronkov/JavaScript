//Конструкторы элементарных типов
let s1 = "String";
let s2 = new String("String");
console.log(typeof s1); //sting
console.log(typeof s2); //object
console.log(s1 == s2.valueOf);  //true
console.log((new String(s1)).length); //6