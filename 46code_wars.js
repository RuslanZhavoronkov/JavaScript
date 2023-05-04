const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    var litre = distanceToPump/mpg;
    
    if (litre <= fuelLeft) {
      return true;
    } else {
      return false;
    }
  };
  