function addN(n) {
    var adder = function (x) {
        return n + x;
    }
    return adder;
}

console.log(addN(5));