function firstNonConsecutive (arr) {
    let newArray = arr;
  for(let i = 1; i < newArray.length; i++) {
    if ((newArray[i] - newArray[i - 1]) != 1) {
      return newArray[i];
    }
    
  }
    return null;
  }