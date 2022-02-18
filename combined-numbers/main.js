hasOnlyPositiveNumbers = (numbers) => {
    let i = 0;
	while(i < numbers.length) { 
		const number = numbers[i];
		if(number < 0) {
            console.log(number,"should be positive!");
            return false;
		}
        i++;
	}
    return true;
}

compareFirstDigit = (numberA, numberB) => {
  const firstDigitAAsString = String(numberA)[0];
  const firstDigitBAsString = String(numberB)[0];
  const firstDigitA = Number(firstDigitAAsString);
  const firstDigitB = Number(firstDigitBAsString);

  return firstDigitA > firstDigitB ? -1 : 1;
}

combinedLargerstNumber = (arrayOfNumbers) => {

	if(hasOnlyPositiveNumbers(arrayOfNumbers)) {
        const sortedArray = arrayOfNumbers.sort(compareFirstDigit);
        const joinedArray = sortedArray.join('');
        console.log(joinedArray)
        console.log(sortedArray)
    }
}

