hasNegativeNumbers = (numbers) => {
    let i = 0;
	while(i < numbers.length) { 
		const number = numbers[i];
		if(number < 0) {
            console.log(number,"should be positive!");
            return true;
		}
        i++;
	}
    return false;
}

compareDigitAtIndex = (numberA, numberB, index) => {
  const digitAAsString = String(numberA)[index];
  const digitBAsString = String(numberB)[index];
  const digitA = Number(digitAAsString);
  const digitB = Number(digitBAsString);

  return digitA > digitB ? -1 : 1;
}

compareNumbers = (numberA, numberB) => {
    return numberA > numberB ? -1 : 1;
}

getSortedArray = (numbers) => {
    return numbers.sort(compareNumbers);
}

combinedLargerstNumber = (arrayOfNumbers) => {
	if(hasNegativeNumbers(arrayOfNumbers)) {
        return;
    }

    // idea for the next time
    // first group the numbers by their first digit
    // [42, 426, 5, 55, 51, 2, 22, 43, 9, 6] would be grouped to [5, 55, 51], [42, 426, 43], [2, 22], [9], [6]
    // then sort every grouped array
    // join the grouped and sorted arrays together desc based on their first digit

    const sortedArray = getSortedArray(arrayOfNumbers)
    const joinedArray = sortedArray.join('');
    console.log(joinedArray)
    console.log(sortedArray)
}

