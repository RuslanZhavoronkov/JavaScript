function first(sequence, n = 1) {
    if (n === 0) {
      return [];
    }
    
    return sequence.slice(0, n);
  }