getBlock = (letters) => {
  return {
    letters: letters,
    isUsed: false,
  };
};

getBlocks = () => [
  getBlock("BO"),
  getBlock("XK"),
  getBlock("DQ"),
  getBlock("CP"),
];

createWord = (word) => {
  var foundCharWithoutBlock = false;
  const blocks = getBlocks();
  const chars = word.split("");

  let letterCount = 0;
  while (letterCount < chars.length) {
    var char = chars[letterCount];
    if (foundCharWithoutBlock) {
      break;
    }

    var foundBlock = false;
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      if (!block.isUsed && block.letters.includes(char)) {
        block.isUsed = true;
        foundBlock = true;
        break;
      }
    }

    foundCharWithoutBlock = !foundBlock;

    letterCount++;
  }
  const canMakeWord = !foundCharWithoutBlock;
  console.log(canMakeWord);
};
