function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var sheep = 0;
    for (var i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === false) {
        sheep += 0;
      } else if (arrayOfSheep[i] === true) {
        sheep += 1;
      }
    }
    return sheep;
  }