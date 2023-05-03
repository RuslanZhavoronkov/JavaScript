function grow(x){
    var result = 1;
      for (var i = 0; i < x.length; i++){
        result *= x[i];
      }
      return result;
    }