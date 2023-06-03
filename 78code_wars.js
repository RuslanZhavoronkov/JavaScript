function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    let age = dadYearsOld - (sonYearsOld * 2);
    
    return age > 0 ? age : age * (-1); 
    
  }