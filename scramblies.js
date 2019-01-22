function createLetterCheck(str1, str2) {
    let letters = {};
    for (let i = 0; i < str2.length; i++) {
      const exists = letters[str2[i]] !== undefined;
      if (!exists) {
        letters[str2[i]] = false;
      }
    }
    return letters;
  }
  
  function hasCorrectLetters(str1, str2) {
    const letterObject = createLetterCheck(str1, str2);
    for (let i = 0; i < str1.length; i++) {
      const currentLetter = str1[i];
      for (let j = 0; j < str2.length; j++) {
        const currentCheckLetter = str2[j];
        if (currentCheckLetter === currentLetter) {
          letterObject[currentLetter] = true;
        }
      }
    }
  
    for (let key in letterObject) {
      if (letterObject[key] === false) {
        return false;
      }
    }
    return true;
  }
  
  function countLettersOne(str1, str2) {
    let lettersCountOne = {};
    for (let i = 0; i < str1.length; i++) {
      const exists = lettersCountOne[str1[i]] !== undefined;
      if (!exists) {
        lettersCountOne[str1[i]] = 1;
      } else  {
        lettersCountOne[str1[i]] += 1;
      }
    }
    return lettersCountOne;
  }
  
  function countLettersTwo(str1, str2) {
    let lettersCountTwo = {};
    for (let i = 0; i < str2.length; i++) {
      const currentValue = str2[i];
      const exists = lettersCountTwo[currentValue] !== undefined;
      if (!exists) {
        lettersCountTwo[currentValue] = 1;
      } else  {
        lettersCountTwo[currentValue] += 1;
      }
    }
    return lettersCountTwo;
  }
  
  function hasEnoughLetters(str1, str2) {
    const lettersInOne = countLettersOne(str1, str2);
    const lettersInTwo = countLettersTwo(str1, str2);
    for (let key in lettersInTwo) {
      for (let key2 in lettersInOne) {
        if (key === key2) {
          if (lettersInOne[key] < lettersInTwo[key]) {
           return false;
          }
        }
      }
    }
    return true;
  }
  
  function scramble(str1, str2) {
    const hasNeededLetters = hasEnoughLetters(str1, str2);
    const hasRightLetters = hasCorrectLetters(str1, str2);
    if(hasNeededLetters && hasRightLetters) {
      return true;
    }
    return false;
  }
  
  scramble("scriptingjava", "javaaaaaaaaaaaaascript"); //false;