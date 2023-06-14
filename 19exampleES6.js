let user = {
    get name () {
        return this._name; //(this._name внутреннее свойство объекта)
    },

    set name (value) {
        if (value.length < 4) {
            console.log ("Имя слишком короткое!");
            return;
        }
        this._name = value;

    }
}

user.name = "Pety";
console.log(user.name);