function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    let result = sum / marks.length;
    console.log(Math.floor(result));
  }

  getAverage([1,5,87,45,8,8]);