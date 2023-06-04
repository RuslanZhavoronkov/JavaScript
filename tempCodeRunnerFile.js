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
console.log(p.hasOwnProperty('printProfile'));
console.log('printProfile' in Person.prototype);
console.log(p instanceof Person);
