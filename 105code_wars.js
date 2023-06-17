function index(array, n) {
  //your code here
  let index = array.length - 1;
  return index < n ? -1 : array[n] ** n;
}
