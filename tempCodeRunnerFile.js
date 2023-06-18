function findMultiples(integer, limit) {
  //your code here
  let arr = [];
  for (let i = integer; integer < limit; i += integer) {
    arr.push(i);
  }
  console.log(arr);
}

findMultiples(5, 25);