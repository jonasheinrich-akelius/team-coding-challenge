hasNegativeNumbers = (numbers) => {
    let i = 0;
    while (i < numbers.length) {
        const number = numbers[i];
        if (number < 0) {
            console.log(number, "should be positive!");
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

containsEachOther = (numberA, numberB) => {
    return String(numberA).startsWith(String(numberB)) ||
        String(numberB).startsWith(String(numberA))
}

compareNumbers = (numberA, numberB) => {
    if (containsEachOther(numberA, numberB)) {
        
    }
    return numberA > numberB ? -1 : 1;
}

getSortedArray = (numbers) => {
    return numbers.sort(compareNumbers);
}

combinedLargerstNumber = (arrayOfNumbers) => {
    if (hasNegativeNumbers(arrayOfNumbers)) {
        return;
    }

    const sortedArray = getSortedArray(arrayOfNumbers)
    const joinedArray = sortedArray.join('');
    console.log(joinedArray)
    console.log(sortedArray)
}

