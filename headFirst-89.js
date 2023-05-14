function Album (title, artist, year) {
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.play = function() {
        // ...
    };
}

var darkside = Album ("Dark Side of the Cheese", "Pink Mouse", 1971); //новый объект не создан(так как отсутствует оператор new). Объект не определен
darkside.play();//Объект для которого мы пытаемся вызвать метод не определен