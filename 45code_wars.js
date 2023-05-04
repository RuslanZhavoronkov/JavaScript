function fakeBin(x){
    var string = "";
      
    for (var i = 0; i < x.length; i++) {
      if (x[i] < 5) {
        string += "0";
      } else if (x[i] >= 5) {
        string += "1";
      }
      }
      
      return string;
      }