
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
    if (!canMakeWord){
      for(var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        if(!block.isUsed && !canMakeWord ) {
          canMakeWord = block.letters.includes(char);
          block.isUsed = canMakeWord;
          console.log(block)
        } 
      }
    }

  }
  console.log(canMakeWord);
}

