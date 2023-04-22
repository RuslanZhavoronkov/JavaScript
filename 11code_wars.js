function squareSum(numbers){
    var kvSum = 0;
  for (var i = 0; i < numbers.length; i++) {
    kvSum += Math.pow(numbers[i], 2);
  }
    return kvSum;
  }