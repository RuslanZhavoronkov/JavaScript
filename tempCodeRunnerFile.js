const correct = (string) => {
  let oldStr = string;
  let str = "";
  for (let i = 0; i < oldStr.length; i++) {
   if (oldStr[i] === '5') {
    str += 'S';
   } else if (oldStr[i] === '0') {
    str += 'O';
   } else if (oldStr[i] === '1') {
     str += 'I';
   } else {
    str += oldStr[i];
   }
  }
  console.log(str);
  }

  correct("L0ND0N");