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