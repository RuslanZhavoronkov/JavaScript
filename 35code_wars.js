function multiple(x) {
    // Good Luck
    if (x % 3 !==0 && x % 5 !== 0){
      return "Miss";
    } else if (x % 3 === 0 && x % 5 === 0) {
      return "BangBoom";
    } else if (x % 5 === 0) {
      return "Boom";
    } if (x % 3 === 0) {
      return "Bang"; 
    }  
    
  }