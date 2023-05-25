function points(games) {
    let newArray = games;
    let point = 0;
    for (let i = 0; i < newArray.length; i++) {
      let newStr = newArray[i];
      newStr[0] > newStr[2] ? point += 3 : point;
      newStr[0] < newStr[2] ? point : point;
      newStr[0] === newStr[2] ? point++ : point;
      
    }
    console.log (point);
  }
points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]);

