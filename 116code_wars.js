function squareDigits(num) {
  let str = String(num);
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    newStr += Number(str[i]) * Number(str[i]);
  }
  return Number(newStr);
}
