class SmallestIntegerFinder {
    findSmallestInt(args) {
      var min = Math.min.apply(Math, args);
      return min;
    }
  }

  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }