function invert(array) {
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i] * (-1);
    } 
    return array;
  }