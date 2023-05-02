function countPositivesSumNegatives(input) {
    // your code here
    var sumkol = 0;
    var multiple = 0;
    var massive = [];
    var massiveIn = input;
    
    
    if (massiveIn.length === 0 || massiveIn === null) {
        return massive;
      }
   
    
    for (var i = 0; i < massiveIn.length; i++) {
      
      if (massiveIn[i] > 0) {
        sumkol++;
            
      } else if (massiveIn[i] < 0) {
        multiple = multiple + massiveIn[i];
      } 
    }
    
    
      massive.push(sumkol);
      massive.push(multiple);
      return massive;
   
  }