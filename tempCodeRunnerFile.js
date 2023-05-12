function countBy(x, n) {
    var z = [];
    var numbers = n;
    var firstNum = x;
    z.push(firstNum);
     while (numbers > 0) {
     
      if(firstNum % 2){
       z.push(firstNum += 2);
       numbers--;
      } else {
       z.push(firstNum++);
       numbers--;
      }
      
      return z;
  }
}
  
  console.log (countBy(1, 10));