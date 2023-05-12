function countBy(x, n) {
    var newArray = [];
    var newNumber = x * n;
    
    if (x % 2 === 0) {
      for (var i = x; x <= newNumber; i += 2 ){
        newArray.push(i);
      }
    } else {
      for (var i = x; x <= newNumber; i++){
        newArray.push(i);
      }
    }
    
    console.log (newArray);
    }

    countBy(1, 10)