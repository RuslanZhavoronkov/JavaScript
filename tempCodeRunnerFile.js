function removeFirstTwo(list) {
   const [ , ,...shorterList] = list; //это объект, переданный функции 
    console.log (shorterList);
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);