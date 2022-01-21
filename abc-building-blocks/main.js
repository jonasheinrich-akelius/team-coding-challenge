
getBlock = (letters) => {
   return {
      string: letters,
      isUsed: false
    }
}

var blocks = [
   getBlock("BO"),
   getBlock("XK"),
   getBlock("DQ"),
   getBlock("CP"),
];

createWord = (word) => {
  console.log(word);
  console.log(blocks);
}

