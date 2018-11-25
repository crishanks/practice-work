// Longest Common Prefix

function findShortestWord(arrayOfWords) {
  let letterCount = arrayOfWords[0].length;
  for (let i = 0; i < arrayOfWords.length; i++) {
    const currentWord = arrayOfWords[i];
    if (currentWord.length < letterCount) {
      letterCount = currentWord.length;
      shortestWord = currentWord;
    }
  }
  return letterCount;
}

function longestCommonPrefix(arrayOfWords) {
  const letterCount = findShortestWord(arrayOfWords);
  for (let sliceAmount = 0; sliceAmount < letterCount; sliceAmount++) {
    const verifyPrefix = verifyWordsPrefix(arrayOfWords, sliceAmount + 1);
    if (!verifyPrefix && sliceAmount === 0) {
      return arrayOfWords[0].slice(0, 0);
    } else if (!verifyPrefix) {
      return arrayOfWords[0].slice(0, sliceAmount);
    }
  }
  return arrayOfWords[0].slice(0, letterCount + 1);
}

function verifyWordsPrefix(arrayOfWords, sliceAmount) {
  const originalSlice = arrayOfWords[0].slice(0, sliceAmount);
  for (let i = 1; i < arrayOfWords.length; i++) {
    const currentWord = arrayOfWords[i];
    const compareSlice = currentWord.slice(0, sliceAmount);
    if (compareSlice !== originalSlice) {
      return false;
    }
  }
  return true;
}

longestCommonPrefix(['flower', 'float', 'fliece']);//'fl'