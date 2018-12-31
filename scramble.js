function scramble(str1, str2) {
    let checkWord = "";
    for (let i = 0; i < str2.length; i++) {
      const currentLetterOfWord = str2[i];
      for (let j = 0; j < str1.length; j++) {
        const currentLetterOfScramble = str1[j];
        if (currentLetterOfScramble !== currentLetterOfWord) {
          continue;
        } else {
          checkWord += currentLetterOfScramble;
          const scrambleArray = str1.split('');
          delete scrambleArray[j];
          str1 = scrambleArray.join('');
          break;
        }
      }
    }
    
    if (checkWord === str2) {
      return true;
    }
    return false;
  }
  
  scramble('scriptjavx','javascript'); //false