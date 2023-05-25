//Ссылки на объекты при помощи констант
const a = {
    name: "John"
};

console.log(a.name);//John

a.name = "Eden"; //изменение значения свойства объекта

console.log(a.name);//Eden

a = {}; //TypeError