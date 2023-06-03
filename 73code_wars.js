function arrayPlusArray(arr1, arr2) {
    let array = arr1.concat(arr2);
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result; //something went wrong
  }