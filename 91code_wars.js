function powersOfTwo(n){
    let newArr = [];
    let m = n + 1;
    for (let i = 0; i < m; i++) {
      newArr.push(2^i);
    }
    console.log(newArr);
  }
  
  powersOfTwo(0);