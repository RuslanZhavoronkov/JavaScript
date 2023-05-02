function findAverage(array) {
    // your code here
    var colNum = array.length;
    var sumNum = 0;
    if (array.length === 0) {
       return 0;
    } 
    for (var i = 0; i < array.length; i++) {
      sumNum += array[i];
    }
    return sumNum/colNum;
  }