var countSheep = function (num){
    //your code here
    var newWord = " sheep...";
    var newString = "";
    
    
    if (num === 0){
      return newString;
    } else {
      for (var i = 1; i <= num; i++) {
        newString += i;
        newString += newWord;
      }
    }
    return newString;
  }