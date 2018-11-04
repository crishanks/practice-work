function kUniqueCharacters(str) {
  let longestSubstring = '';
  const numberOfUniqueLetters = parseInt(str[0]);
  const restOfString = str.slice(1);

  let uniqueLettersAmount = 0;
  for (let i = 0; i < restOfString.length; i++) {
    const currentLetter = restOfString[i];
    for (let j = i + 1; j < restOfString.length; j++) {
      const currentCheckLetter = restOfString[j];
      const slicedString = restOfString.slice(i, j);
      const passesCheck = rightAmountOfUniqueLetters(numberOfUniqueLetters, slicedString);

      if (passesCheck && longestSubstring.length < slicedString.length) {
        longestSubstring = slicedString;
      }
    }
  }
  return longestSubstring
}

function rightAmountOfUniqueLetters(numberOfLetters, stringToCheck) {
  const uniqueLetters = {};
  for (let i = 0; i < stringToCheck.length; i++) {
    const currentLetter = stringToCheck[i];
    uniqueLetters[currentLetter] = true;
  }

  return Object.keys(uniqueLetters).length <= numberOfLetters;

}

kUniqueCharacters("2aabbcbbbadef");
//Output:"bbcbbb"
