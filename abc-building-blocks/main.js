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
  getBlock("NA"),
  getBlock("GT"),
  getBlock("RE"),
  getBlock("TG"),
  getBlock("QD"),
  getBlock("FS"),
  getBlock("JW"),
  getBlock("HU"),
  getBlock("VI"),
  getBlock("AN"),
  getBlock("OB"),
  getBlock("ER"),
  getBlock("FS"),
  getBlock("LY"),
  getBlock("PC"),
  getBlock("ZM"),
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
