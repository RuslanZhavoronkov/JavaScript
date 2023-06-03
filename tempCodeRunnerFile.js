const sumArray = (array) => {
    let result = 0;
    let maxNum = 0;
    let minNum = 0;
    for (let i = 0; i < array.length; i++) {
     if (array[i] === Math.max(...array)) {
        maxNum += 1;
        if (maxNum > 1) {
            result += ((Math.max(...array) * maxNum) - Math.max(...array));
        } else {
            result += 0;
        }
      } 
     if (array[i] === Math.min(...array)) {
        minNum +=1;
        if (minNum > 1) {
            result += ((Math.min(...array) * mixNum) - Math.min(...array));
        } else {
            result += 0;
        }
     }

     if (array === null || array === undefined || array === 0) {
        result = 0;
     } else {
        result += array[i];
     }
      
      
       /* array[i] === Math.max(...array) ? maxNum +=1
      : array[i] === Math.min(...array) ? minNum +=1
      : maxNum > 1 ? result += maxNum
      : minNum > 1 ? result += minNum
      : array === 0 || array === [] || array === undefined ? result = 0 
      : result += array[i]*/
    }
     console.log(result);
   }
   
   sumArray([0, 1, 6, 10, 10]);