function positiveSum(arr) {
    var number = 0;
    for (var i = 0; i < arr.length; i++) {
     if (arr[i] <= 0){
       number +=0;
     } else {
       number += arr[i];
     }
       
  }
    return number;
  }