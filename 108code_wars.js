function gooseFilter(birds) {
  let arr = [];
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for (let i = 0; i < birds.length; i++) {
    switch (birds[i]) {
      case "African":
      case "Roman Tufted":
      case "Toulouse":
      case "Pilgrim":
      case "Steinbacher":
        break;
      default:
        arr.push(birds[i]);
        break;
    }
  }
  return arr;
}
