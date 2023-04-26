function digitize(n) {
    //code here
    var newStr = String(n);
    var newMsv = [];
    
    for (var i = newStr.length - 1; i >= 0; i--) {
      newMsv.push(Number(newStr.charAt(i)));
    }
    return newMsv;
  }