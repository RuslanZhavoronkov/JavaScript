function shortcut(string) {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        newStr += "";
        break;
      default:
        newStr += string[i];
        break;
    }
  }
  return newStr;
}
