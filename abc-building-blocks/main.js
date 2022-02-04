
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
  var canMakeWord = false;
  const chars = word.split("");
  for(var letterCount = 0; letterCount < chars.length; letterCount++) {
    var char = chars[letterCount];
    for(var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      if(!canMakeWord) {
        console.log(char);
        console.log(block.letters);
        canMakeWord = block.letters.includes(char);
      }
    }
  }
  console.log(canMakeWord);
}

