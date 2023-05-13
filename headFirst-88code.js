// Напишем конструктор объектов
function Coffee (roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function () {
        if (this.ounces === 8) {
            return "small";
        } else if (this.ounces === 12) {
            return "medium";
        } else if (this.ounces === 16) {
            return "large";
        }
    };
    this.toString = function () {
        return "You've ordered a " + this.getSize() + " " + this.roast + " coffee";
    };
}

var houseBlend = new Coffee ("House Blend", 12);//Создаем объект с помощью конструктора Coffee и сохраняем его в переменной houseBlend
console.log (houseBlend.toString());

var darkRoast = new Coffee ("Dark Roast", 16); //Создаем объект с помощью конструктора Coffee и сохраняем его в переменной darkRoast
console.log (darkRoast.toString());