makeDiamond = (char) => {
    const startCharacter = 'A'.charCodeAt(0);
    const midRowCharacter = char.charCodeAt(0);
    for(let i = startCharacter; i <= midRowCharacter; i++) {
        console.log(String.fromCharCode(i));
    }
}