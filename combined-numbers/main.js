hasOnlyPositiveNumbers = (numbers) => {
    let hasNegativeNumber = false;
    let i = 0;
	while(i < numbers.length) {
        // is there a bug in here? :P
		i++;   
		const number = numbers[i];
		if(number < 0) {
            console.log(number,"should be positive!");
            hasNegativeNumber = true;
            break;
		}
	}
    return !hasNegativeNumber;
}

largestNumberOfArray = (numbers) => {
	return Math.max(...numbers);
}

compareFirstDigit = (numberA, numberB) => {
  const firstDigitAAsString = String(numberA)[0];
  const firstDigitBAsString = String(numberB)[0];
  const firstDigitA = Number(firstDigitAAsString);
  const firstDigitB = Number(firstDigitBAsString);

  return firstDigitA > firstDigitB ? 1 : -1;
}

largestStartingNumberOfArray = (numbers) => {
    for(let i = 0; i < numbers.length; i++) {
        let number = numbers[i].toString();
        if(number.length > 1) {
            console.log("first number of", number, "is", number.charAt(0));
        } else {
            console.log(number,"has only one digit");
        }
    }
}

combinedLargerstNumber = (arrayOfNumbers) => {
	if(hasOnlyPositiveNumbers(arrayOfNumbers)) {
        console.log(largestNumberOfArray(arrayOfNumbers));
        largestStartingNumberOfArray(arrayOfNumbers);
        console.log(arrayOfNumbers)
    }
}

