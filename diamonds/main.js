reverseString = (str) => {
  const array = str.split("");
  return array.reverse().join("");
}

getDots = (currentRow, midRow) => {
  return ".".repeat(midRow - currentRow);
}

makeDiamond = (char) => {
    const startCharacter = 'A'.charCodeAt(0);
    const midRowCharacter = char.charCodeAt(0);
		let diamondTop = "";

    for(let i = startCharacter; i < midRowCharacter; i++) {
			diamondTop += getDots(i, midRowCharacter);
      if (startCharacter !== i) {
				diamondTop += String.fromCharCode(i);
			}
			diamondTop += String.fromCharCode(i);
      diamondTop += getDots(i, midRowCharacter);
      diamondTop += "\n";
    }

    const diamondBottom = reverseString(diamondTop);

    const diamondMiddle = char + char;
    const diamond = diamondTop + diamondMiddle + diamondBottom;

    console.log(diamond);
}
