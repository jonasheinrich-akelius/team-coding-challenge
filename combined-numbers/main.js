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
};

compareDigitAtIndex = (numberA, numberB, index) => {
  const digitAAsString = String(numberA)[index];
  const digitBAsString = String(numberB)[index];
  const digitA = Number(digitAAsString);
  const digitB = Number(digitBAsString);

  return digitA > digitB ? -1 : 1;
};

containsEachOther = (numberA, numberB) => {
  return (
    String(numberA).startsWith(String(numberB)) ||
    String(numberB).startsWith(String(numberA))
  );
};

compareNumbers = (numberA, numberB) => {
  if (containsEachOther(numberA, numberB)) {
    console.log("contains", numberA, numberB);
    if (numberA < numberB) {
      const tailOfLargeNumber = String(numberB).slice(String(numberA).length);
      console.log(
        "A",
        tailOfLargeNumber,
        numberA,
        numberB,
        tailOfLargeNumber < String(numberA)
      );
      return tailOfLargeNumber < String(numberA) ? -1 : 1;
    } else if (numberB < numberA) {
      const tailOfLargeNumber = String(numberA).slice(String(numberB).length);
      console.log(
        "B",
        tailOfLargeNumber,
        numberA,
        numberB,
        tailOfLargeNumber < String(numberA)
      );
      return tailOfLargeNumber > String(numberB) ? -1 : 1;
    }
  }
  return String(numberA) > String(numberB) ? -1 : 1;
};

getSortedArray = (numbers) => {
  return numbers.sort(compareNumbers);
};

combinedLargerstNumber = (arrayOfNumbers) => {
  if (hasNegativeNumbers(arrayOfNumbers)) {
    return;
  }

  const sortedArray = getSortedArray(arrayOfNumbers);
  const joinedArray = sortedArray.join("");
  console.log("joinedArray", joinedArray);
  console.log(sortedArray);
};
