function firstNonConsecutive (arr) {
    let newArray = arr;
  for(let i = 1; i < newArray.length; i++) {
    if ((newArray[i] - newArray[i - 1]) != 1) {
      console.log (newArray[i]);
    }
    
  }
  console.log (null);
  }

  firstNonConsecutive ([1,2,3,4,6,7,8]);