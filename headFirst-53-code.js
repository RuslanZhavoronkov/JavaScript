var phrase = "the cat in the hat";
var index = phrase.indexOf("cat"); //находим позицию первого вхождения "cat" в исходной строке
console.log("There's a cat sitting at index " + index); //There's a cat sitting at index 4


index = phrase.indexOf("the", 5);
console.log("There's a the sitting at the index " + index); //There's a the sitting at the index 11

var phrase = "the cat in the hat";
index = phrase.indexOf("dog");
console.log("there's a dog sitting at index " + index); //there's a dog sitting at index -1