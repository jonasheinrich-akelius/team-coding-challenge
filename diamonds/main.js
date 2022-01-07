reverseString = (str) => {
  const array = str.split("");
  return array.reverse().join("");
}

makeDiamond = (char) => {
    const startCharacter = 'A'.charCodeAt(0);
    const midRowCharacter = char.charCodeAt(0);
		let diamondTop = "";

    for(let i = startCharacter; i < midRowCharacter; i++) {
			if (startCharacter !== i) {
				diamondTop += String.fromCharCode(i);
			}
			diamondTop += String.fromCharCode(i);
    }

    const diamondBottom = reverseString(diamondTop);

    const diamondMiddle = char + char;
    const diamond = diamondTop + diamondMiddle + diamondBottom;

    console.log(diamond);
}
