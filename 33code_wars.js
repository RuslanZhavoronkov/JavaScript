function sum (numbers) {
    sumElements = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumElements += numbers[i];
    }
    
    return sumElements;
  }