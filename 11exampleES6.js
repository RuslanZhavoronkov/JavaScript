//Диструктивное присваивание объектов
/*let object = {"youName": "John", "age": 23};
let youName, age;

({youName, age} = object);*/
let{youName, age} = {youName: "John", age: 23};//Присвоение значений свойств итерируемого объекта переменным 

console.log(youName);
console.log(age);

//Если потребуется использовать переменные с другими именами
let newObject = {"newName": "Pety", "age": 15};
let x, y;
({"newName": x, "age": y} = newObject);
console.log(x);
console.log(y);

let {"newName": a, "age": b} = {"newName": "Pety", "age": 15};
console.log(a);
console.log(b);

//Значения по умолчанию для пременных
let {f : i, g, h = 3} = {f:1, g:2};
console.log(i);
console.log(g);
console.log(h);

//Вычисляем имена свойств в диструктивном присваивании
let{["first" + "Name"]: v} = {"firstName": "Evgen"};
console.log(v); 

//Деструктивное присваивание вложенных объектов

let {newName, otherInfo:{newAge}} = {newName: "Misha", otherInfo:{newAge:27}};
console.log(newName, newAge); 

//Использование деструктивного присваивания объекта как параметра
function myFunction ({name = 'Rafaelo', age = 25, profession = 'Designer'}={}) {
    console.log(name, age, profession);
}

//myFunction({name:'Edic', age: 52});
myFunction(undefined);

function myFunction({name= 'Eduardo', age = 52, proffession = 'Designer'}={name:'Goga', age: 55}) {
    console.log (name, age, proffession);
}

myFunction(undefined);