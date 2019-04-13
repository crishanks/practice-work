const spinWords = (str) => {
  const wordsArr = str.split(' ');
  const spunWords = wordsArr.map(word => {
    if (word.length < 5) {
      return word;
    } else if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
  });
  return spunWords.join(' ');
}

spinWords("Hey fellow warriors");
//split the string into an array of words
//map over the array and check if each word is at least 5 letters long
//if it isn't return the word
//if it is, reverse and return that word
//rejoin the array and return the new string