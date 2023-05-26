//Значения параметров по умолчанию
function myFunction(x, y, z) {
    x = x === undefined ? 1 : x;
    y = y === undefined ? 2 : y;
    z = z === undefined ? 3 : z;
    console.log(x, y, z);
}
myFunction(6, 7);

function myFunction (x, y, z) {
    if (x === undefined) {
       x = 1;
    } else {
       x = x;
    }

    if (y === undefined) {
       y = 2;
    } else {
        y = y;
    }

    if (z === undefined) {
       z = 3;
    } else {
        z = z;
    }

    console.log(x, y, z);
}
myFunction(6, 7);

function myFunction(x, y, z) {
   x = x === undefined ? 1 : x;
   y = y === undefined ? 2 : y;
   z = z === undefined ? 3 : z;
   console.log(x, y, z);
}
myFunction(5, 8);//5 8 3

//В ES6 можно задать параметры по умолчанию таким образом:
function myFunction(x = 1, y = 2, z = 3) { // задали значение параметров по умолчанию(если x === undefined, y === undefined, z === undefined)
   console.log(x, y, z);
}
//myFunction(5, 8); 
myFunction(undefined, 7, 9); // 1 7 9 (undefined воспринимается как отсутствие аргумента)

function myFunction (x = 1, y = 2, z = 3 + 5) {
   console.log(x, y, z);
}
myFunction(6, 7);//6 7 8