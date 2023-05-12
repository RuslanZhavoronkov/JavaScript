function reverseSeq(n) {
    var newArray = [];
    for (var i = n; i > 0; i--) {
      newArray.push(i);
    }
    return newArray;
  }