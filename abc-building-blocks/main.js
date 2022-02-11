
getBlock = (letters) => {
   return {
      letters: letters,
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
  var canMakeWord = fale;
  for(var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    if(!canMakeWord) {
      canMakeWord = block.letters.includes(word);
    }
  }
  console.log(canMakeWord);
}

