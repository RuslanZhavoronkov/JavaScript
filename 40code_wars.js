function bmi(weight, height) {
  
    var znam = Math.pow(height,2);
    var bim = weight/znam;
    
    if (bim <= 18.5) {
      return "Underweight";
    } else if (bim <= 25) {
      return "Normal";
    } else if (bim <= 30) {
      return "Overweight";
    } else if (bim > 30) {
      return "Obese";
    }
  }