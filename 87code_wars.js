function getCount(str) {
    let result = 0;
    for(let i = 0; i < str.length; i++) {
      switch(str[i]) {
          case 'a':
          result += 1;
          break;
          case 'e':
          result += 1;
          break;
          case 'i':
          result += 1;
          break;
          case 'o':
          result += 1;
          break;
          case 'u':
          result += 1;
          break;
      }
    }
    return result;
  }