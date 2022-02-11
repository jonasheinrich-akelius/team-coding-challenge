largestNumberOfArray = (numbers) => {
	return Math.max.apply(null, numbers)
}

combinedLargerstNumber = (arrayOfNumbers) => {
	let i = 0;
	while(i< arrayOfNumbers.length) {
		i++;   
		const number = arrayOfNumbers[i];
		if(number < 0) {
				console.log(number,"should be positive!");
				break;
		}
	}

	largestNumberOfArray(arrayOfNumbers);
	console.log(largestNumberOfArray(arrayOfNumbers));
	console.log(arrayOfNumbers)
}



