let user = {
    name: 'John',
    surname: 'Smith',

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName (value) {
        [this.name, this.surname] = value.split(' ');
    }

};

console.log (user.fullName);

user.fullName = 'Alice Cooper'; //перезаписали значение свойства fullName
console.log (user.fullName);
console.log(user.name);
console.log(user.surname);
