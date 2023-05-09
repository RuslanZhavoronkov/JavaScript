function makeCounter() {
    var count = 0;
    return {
        increment: function() {
            count++;
            return count;
        }
    }
        
}

var result = makeCounter();
console.log(result.increment());
console.log(result.increment());