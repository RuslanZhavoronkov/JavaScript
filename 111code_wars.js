function capitalizeWord(word) {
  let one = word[0].toUpperCase();
  let str = "";
  for (let i = 1; i < word.length; i++) {
    str += word[i];
  }
  return one + str;
}

function capitalizeWord(word) {
  return word[0].toUpperCase().slice(1);
}
