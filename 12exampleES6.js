//Стрелочные функции
let circleArea = (pi, r) => {
    let area = pi * r * r;
    return area;
}

let result = circleArea(3.14, 3);
console.log(result);//28.26

//Запишем пример стрелочной функции с одной командой. При этом фигурные скобки "{}" можно не использовать
let circleAreas = (pi, r) => pi * r * r; //При этом значение вер нется автоматически при вызове функции
console.log(circleAreas(3.14, 3));//28.26

//Значение ключевого слова this в обычной функции ES5
var object = {
    f1: function() {
        console.log(this); 
        var f2 = function () {
            console.log(this);
        }
        f2();
        setTimeout(f2, 1000);
    }
}
object.f1();//object
            //Window
            //Window

//Значение ключевого слова this в стрелочной функции(Arrow functions)
let object = {
    f1: () => {
        console.log(this); //Ссылка на объект Window, так как f1 является свойством объекта Window
        let f2 = () => console.log (this); //Ссылка на объект Window, так как f2 является свойством объекта Window 
        f2();
        setTimeout(f2, 1000);
    }
}
object.f1(); //Window
             //Window
             //Window