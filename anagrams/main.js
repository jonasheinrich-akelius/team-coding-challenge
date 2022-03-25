permutate = (leftchars, remainingLetters) => {
    if(remainingLetters.length > 0){
      const joinStrings = leftchars.concat(remainingLetters);
      console.log("concat string", joinStrings.join(""))
    }
}

anagram = (input) => {
    const inputArray = input.split("");
    for(let i = 0; i < input.length; i++) {
        const remainingLetters = inputArray.splice(i, 1);
        const leftchars= inputArray.splice(-i)
        permutate(leftchars, remainingLetters);
    }
    console.log(input)
};
