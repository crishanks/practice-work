function mostCommonLetter(str) {
    const numAndLetObject = createNumberAndLetterObject(str);
    const highestNumber = findHighestNumber(numAndLetObject);
    const hightestLetter = findHighestLetter(numAndLetObject);
    const resultArray = combineIntoArray(hightestLetter, highestNumber);
    return resultArray;
  }
  
  function createNumberAndLetterObject(str) {
    let nALObject = {};
    for (let i = 0; i < str.length; i++) {
      const currentLetter = str[i];
      const currentLetterExists = nALObject[currentLetter] !== undefined;
      if (!currentLetterExists) {
        nALObject[currentLetter] = 1;
      } else if (currentLetterExists) {
        nALObject[currentLetter] += 1;
      }
    }
    return nALObject;
  }
  
  function findHighestNumber(nALObject) {
    let theHighestNumber = 0;
    for (let key in nALObject) {
      const currentValue = nALObject[key];
      if (currentValue > theHighestNumber) {
        theHighestNumber = currentValue;
      }
    }
    return theHighestNumber;
  }
  
  function findHighestLetter(nALObject) {
    let theHighestLetter = '';
    let numbersCount = 0;
    for (let key in nALObject) {
      const currentValue = nALObject[key];
      if (currentValue > numbersCount) {
        theHighestLetter = key;
        numbersCount = currentValue;
      }
    }
    return theHighestLetter;
  }
  
  function combineIntoArray(theHighestLetter, theHighestNumber) {
    let result = [];
    result.push(theHighestLetter);
    result.push(theHighestNumber);
    return result;
    console.log(result);
  }
  
  mostCommonLetter('abccfgsergrravzzzzzzzzzcc');
  //[z, 9]