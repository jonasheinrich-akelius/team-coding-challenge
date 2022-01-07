makeDiamond = (char) => {
    const startCharacter = 'A'.charCodeAt(0);
    const midRowCharacter = char.charCodeAt(0);
		let diamond = "";

    for(let i = startCharacter; i <= midRowCharacter; i++) {
			if (startCharacter !== i) {
				diamond += String.fromCharCode(i);
			}
			diamond += String.fromCharCode(i);
    }

		console.log(diamond);
}
