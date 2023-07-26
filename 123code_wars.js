function first(arr, n = 1) {
    if (n === 0) {
      return [];
    }
    
    return arr.slice(0, n);
  }