combinationsOfRestFunc = (rest) => {
  if (rest.length == 1) {
    return [rest];
  }

  const restArray = rest.split("");

  let combis = [];
  for (let i = 0; i < restArray.length; i++) {
    const restArrayCopy = [...restArray];
    const currentChar = restArray[i];
    restArrayCopy.splice(i, 1);
    const remainingChars = restArrayCopy.join("");

    combis = combis.concat(
      combinationsOfRestFunc(remainingChars).map((combi) => currentChar + combi)
    );
  }

  return combis;
};

anagram = () => {
  const input = "BIRO";
  const combinations = combinationsOfRestFunc(input);

  const result = combinations.join(" ");
  console.log(result);
};
