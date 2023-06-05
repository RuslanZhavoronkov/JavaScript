class Book {
    constructor (author) {
        this._author = author;
    }

    get writer () {
        return this._author;
    }

    set writer (value) {
        this._author = value;
    }
}

let pencil = new Book ('Edward');
console.log(pencil._author);
console.log(pencil.writer);

pencil.writer = 'Gurgen';
console.log(pencil._author);
console.log(pencil.writer);