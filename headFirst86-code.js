function setTimer(doneMessage,n) {
    setTimeout(function() {
        console.log(doneMessage);
    }, n)
    doneMessage = "OUCH";
}

setTimer("Coockies are done!", 1000);