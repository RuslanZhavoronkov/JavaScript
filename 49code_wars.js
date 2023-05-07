function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    var string = "";
    for (var i = 0; i < dna.length; i++){
      if (dna[i] === "T") {
        string += "U";
      } else {
        string += dna[i];
      }
    }
    return string;
  }