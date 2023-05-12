function countBy(x, n) {
    var newArray = [];
    var newNumber = x * n;
    
    for (var i = x; i <= newNumber; i += x) {
      newArray.push(i);
    }
    
    return newArray;
    
    }
    