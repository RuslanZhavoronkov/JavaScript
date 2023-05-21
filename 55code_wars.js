function rentalCarCost(d) {
    // Your solution here
    var sumBaks = d * 40;
    if (d <= 2) {
      return sumBaks;
    } else if (d >= 7) {
      return sumBaks - 50;
    } else if (d >= 3) {
      return sumBaks - 20;
    }
  }