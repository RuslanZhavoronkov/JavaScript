var summation = function (num) {
    var newNumber= 0;
    var i = 1;
    while (i <= num) {
        newNumber += i; 
        i++;
    }
    return newNumber;
  }

  summation(2);