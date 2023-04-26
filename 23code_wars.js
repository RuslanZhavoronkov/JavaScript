function maps(x){
    var newMassive = [];
    for (var i = 0; i < x.length; i++) {
      newMassive.push((x[i]) * 2);
    }
    return newMassive;
    }
    maps([1,2,3]);