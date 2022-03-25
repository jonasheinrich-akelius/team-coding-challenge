// permutate = (mainchar) => {
//     if(rightchars.length > 0){
//       const joinStrings = leftchars.concat(rightchars);
//       console.log("concat string", joinStrings.join(""))
//     }
// }

permutate = (input) => {
    const inputArray = input.split("");
		if (inputArray.length === 0) {
			return [];
		} 

		if (inputArray.length === 1) {
			return inputArray;
		}

    for(let i = 0; i < input.length; i++) {
				const mainchar = inputArray[i];
        // const rightchars = inputArray.splice(i, 1);
        // const leftchars = inputArray.splice(-i);
				// const remainingChars = [leftchars, rightchars]
        permutate(mainchar);
    }
    console.log(input);
};
