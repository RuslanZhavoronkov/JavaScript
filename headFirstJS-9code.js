function speak(kind) {
    var defaultSound = " ";
    if(kind == "dog") {
        alert("Woof");
    } else if (kind == "cat") {
        alert("Meow"); 
    } else {
        alert(defaultSound);
    }
}

var pet = prompt ("Enter a type of pet: ");
speak(pet);