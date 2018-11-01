function kUniqueCharacters(str) {
  let longestSubstring = '';
  const k = parseInt(str[0]);
  const restOfString = str.slice(1);

  let uniqueLettersAmount = 0;
  let uniqueLetters = [];
  for (let i = 0; i < restOfString.length; i++) {
    const currentLetter = restOfString[i];
    for (let j = 0; j < restOfString.length; j++) {
      const currentCheckLetter = restOfString[j];
      const slicedString = restOfString.slice(i, j + 1);
      if (!uniqueLetters.includes(currentCheckLetter)) {
        uniqueLetters.push(currentCheckLetter);
        uniqueLettersAmount += 1;
      }
      if (uniqueLettersAmount > k && slicedString.length > longestSubstring.length) {
        longestSubstring = slicedString;
        uniqueLetters = [];
        uniqueLettersAmount = 0;
      }
    }
  }
  return longestSubstring
}

kUniqueCharacters("2aabbcbbbadef");
//Output:"bbcbbb"
