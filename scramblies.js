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
  
  function countLettersOne(str1) {
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
  
  function countLettersTwo(str2) {
    let lettersCountTwo = {};
    for (let i = 0; i < str2.length; i++) {
      const exists = lettersCountTwo[str2[i]] !== undefined;
      if (!exists) {
        lettersCountTwo[str2[i]] = 1;
      } else  {
        lettersCountTwo[str2[i]] += 1;
      }
    }
    return lettersCountTwo;
  }
  
  function updateLettersObject(str1, str2) {
    let lettersObject = createLetterCheck(str1, str2);
    const lettersInOne = countLettersOne(str1);
    const lettersInTwo = countLettersTwo(str2);
    console.log('letObjBefore: ', lettersInOne)
  
    for (let key in lettersInOne) {
      console.log("key", key);
      let currentValue = lettersInOne[key];
      for (let checkKey in lettersInTwo) {
        console.log("checkKey", checkKey)
        const currentCheckValue = lettersInTwo[checkKey];
        if (key === checkKey) {
          lettersObject[key] = true;
        }
      }
    }
    return lettersObject;
  }
  
  function updateLettersInOne(str1, str2) {
    let lettersObject = createLetterCheck(str1, str2);
    const lettersInOne = countLettersOne(str1);
    const lettersInTwo = countLettersTwo(str2);
  
    for (let key in lettersInOne) {
      console.log("key", key);
      let currentValue = lettersInOne[key];
      for (let checkKey in lettersInTwo) {
        console.log("checkKey", checkKey)
        const currentCheckValue = lettersInTwo[checkKey];
        if (key === checkKey) {
          lettersInOne[key] -= 1;
        }
      }
    }
    return lettersInOne;
  }
  
  function scramble(str1, str2) {
    const finalLettersObject = updateLettersObject(str1, str2);
    const finalLettersCount = updateLettersInOne(str1, str2);
    console.log("finalLettersCount: ", finalLettersCount);
    console.log('finalLettersObject: ', finalLettersObject)
  
    for (let key in finalLettersObject) {
      if (finalLettersObject[key] === false || finalLettersCount[key] < 0) {
        return false;
      }
    }
    return true;
  }
  
  scramble("scriptingjava", "javascript"); //true;