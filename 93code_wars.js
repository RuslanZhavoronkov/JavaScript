function expressionMatter(a, b, c) {
  let resultOne = a * (b + c);
  let resultTwo = a * b * c;
  let resultThree = a + b * c;
  let resultFour = (a + b) * c;
  let resultFive = a + b + c;

  let arr = [resultOne, resultTwo, resultThree, resultFour, resultFive];

  return Math.max(...arr);
}
