class Person {
    constructor(name) {
        this._name_ = name;
    }

    get name () {
        return this._name_;
    }

    set name (name) {
        this._name_ = name;
    }
}

let slash = new Person ('Edward');
console.log('name' in Person.prototype);
console.log(slash.name);
slash.name = "Edik";
console.log (slash.name);
console.log(slash._name_);