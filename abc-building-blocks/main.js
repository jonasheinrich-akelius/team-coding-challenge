
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
  var canMakeWord = true;
  const chars = word.split("");

  let letterCount = 0;
  while(letterCount < chars.length) {    
    var char = chars[letterCount];
    if (canMakeWord) {
      for(var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        if(!block.isUsed) {
          canMakeWord = block.letters.includes(char);
          block.isUsed = canMakeWord;
          console.log(block)
        } 
      }      
    } else {
      console.log("else");
      canMakeWord = false;
      break;
    }

    letterCount++;    
  }
  console.log(canMakeWord);
}

