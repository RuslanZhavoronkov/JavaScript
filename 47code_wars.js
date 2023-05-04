function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var man = classPoints.length;
    var resultClass = 0;
    var middleBall;
    
    for (var i = 0; i < classPoints.length; i++) {
      resultClass += classPoints[i];
    }
    
    middleBall = resultClass/man;
    
    if (yourPoints > middleBall) {
      return true;
    } else {
      return false;
    }
    
  }