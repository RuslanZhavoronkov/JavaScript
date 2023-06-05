function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter
    let n = (1.609344/4.54609188);
    let result = mpg * n;
    
    return Number(result.toFixed(2));
    
  }