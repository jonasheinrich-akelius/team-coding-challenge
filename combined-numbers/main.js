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
        console.log('contains', numberA, numberB)
        if(numberA < numberB){
           const tailOfLargeNumber = String(numberB).slice(numberA.length);
           return tailOfLargeNumber < numberA ? -1 : 1;       
        } else if(numberB < numberA) {
            const tailOfLargeNumber = String(numberA).slice(numberB.length);
            return tailOfLargeNumber < numberB ? -1 : 1;   
        }
      
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
    console.log("joinedArray",joinedArray)
    console.log(sortedArray)
}

