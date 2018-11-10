function longestWord(str) {
    let result = '';
    const splitString = str.split(' ');
    for (let i = 0; i < splitString.length; i++) {
      const currentWord = splitString[i];
      if (currentWord.length > result.length) {
        result = currentWord;
      }
    }
    return result;
  }
  
  longestWord('the cat ran over the stairwell');
  //'stairwell'. 