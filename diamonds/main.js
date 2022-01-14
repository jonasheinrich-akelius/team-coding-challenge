reverseString = (str) => {
  const array = str.split("");
  return array.reverse().join("");
};

getOutsideDots = (currentRow, midRow) => {
  return ".".repeat(midRow - currentRow);
};

getInsideDots = (currentRow) => {
  const count = (currentRow - "A".charCodeAt(0) - 1) * 2 + 1;
  return ".".repeat(count);
};

makeDiamond = (char) => {
  const startCharacter = "A".charCodeAt(0);
  const midRowCharacter = char.charCodeAt(0);
  let diamondTop = "";

  for (let i = startCharacter; i < midRowCharacter; i++) {
    diamondTop += getOutsideDots(i, midRowCharacter);
    if (startCharacter !== i) {
      diamondTop += String.fromCharCode(i);
      diamondTop += getInsideDots(i);
    }
    diamondTop += String.fromCharCode(i);
    diamondTop += getOutsideDots(i, midRowCharacter);
    diamondTop += "\n";
  }

  const diamondBottom = reverseString(diamondTop);

  let diamondMiddle;
  if (char == "A") {
    diamondMiddle = char;
  } else {
    diamondMiddle = char + getInsideDots(midRowCharacter) + char;
  }
  const diamond = diamondTop + diamondMiddle + diamondBottom;

  console.log(diamond);
};
