permutate = (remainingLetters) => {
    console.log(remainingLetters);
}

anagram = (input) => {
    const inputArray = input.split("");
    for(let i = 0; i < input.length; i++) {
        const firstLetter = inputArray[i];
        const remainingLetters = inputArray.splice(i, 1);
        permutate(remainingLetters);
    }
};
