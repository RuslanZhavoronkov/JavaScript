//Использование деструктивного присваивания как параметра
function myFunction([a, b, c = 3]) {
    console.log(a, b, c);
}

myFunction([1, 2]); // 1 2 3

//В качестве значений параметров по умолчанию можно использовать деструктивное присваивание массива

function myFunction([a, b, c = 3] = [1, 2]) { 
    console.log(a, b, c);
}

myFunction(undefined);// 1 2 3

function myFunction ([a = 1, b = 2, c = 3]=[]) {
    console.log (a, b, c);
}
myFunction(undefined);