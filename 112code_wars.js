function divisibleBy(numbers, divisor) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] % divisor === 0 ? arr.push(numbers[i]) : arr.push();
  }
  return arr;
}
