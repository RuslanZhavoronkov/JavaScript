//Объявление класса
class Student {
    constructor(name) {
        this.name = name
    }
}

let s1 = new Student('Eden'); //переменная s1 хранит новый экземпляр класса (объект) Student
console.log(s1.name);

//Выражение класса
const Junior = class {
    constructor(name) {
        this.name = name;
    }
}

let s2 = new Junior('Misha');//Переменная s2 хранит новый экземпляр класса (объект) Junior
console.log(s2.name);

//Добавление методов к свойству prototype класса
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printProfile(){   //Добавили к свойству prototype класса метод printProfile
        console.log(`Name is: ${this.name} and Age is: ${this.age}`);
    }
}

let p = new Person('Eden', 12);
p.printProfile();// Name is: Eden and Age is: 12
console.log(p.hasOwnProperty('printProfile')); //false-свойство определено в прототипе
console.log('printProfile' in Person.prototype);//true-свойство содержится в прототипе
console.log(p instanceof Person); //true - p является экземпляром класса
