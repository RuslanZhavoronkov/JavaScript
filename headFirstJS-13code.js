function bake (degrees) {
    var message;

    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (degrees < 100) {
        message = "I'm note a refrigerator!";
    } else {
        message = "That's a very comfortable temperatura for me."
    }

    return message;
}

var statusIs = bake (350);
statusIs;
