function removeEveryOther(arr){
    //your code here
    let newArray = [];
    for(let i = 0; i < arr.length; i+=2) {
      newArray.push(arr[i]);
    }
    return newArray;
  }