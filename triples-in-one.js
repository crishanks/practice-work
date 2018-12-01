function findTriplesInOne(num1) {
    let triplesInOne = {};
    const numberOneString = num1.toString();
    for (let i = 0; i < numberOneString.length - 2; i++) {
      const currentNumber = numberOneString[i];
      const nextNumber = numberOneString[i + 1];
      const thirdNumber = numberOneString[i + 2];
      const isTriple = currentNumber === nextNumber && nextNumber === thirdNumber;
      if (!isTriple) {
        continue;
      }
      const numberExists = triplesInOne[currentNumber] !== undefined;
      if (!numberExists) {
        triplesInOne[currentNumber] = 1;
      } else if (numberExists) {
        triplesInOne[currentNumber] += 1;
      }
    }
    return triplesInOne;
  }
  
  function findDoublesInTwo(num2) {
    let doublesInTwo = {};
    const numberTwoString = num2.toString();
    for (let i = 0; i < numberTwoString.length - 1; i++) {
      const currentNumber = numberTwoString[i];
      const nextNumber = numberTwoString[i + 1];
      const isDouble = currentNumber === nextNumber;
      const numberExists = doublesInTwo[currentNumber] !== undefined;
      if (!isDouble) {
        continue;
      } 
      if (!numberExists) {
        doublesInTwo[currentNumber] = 1;
      } else if (numberExists) {
        doublesInTwo += 1;
      }
    }  
    return doublesInTwo;
  }
  
  function findtripleDouble(triplesInOneNumbers, doublesInTwoNumbers) {
    const theNumbers = Object.keys(triplesInOneNumbers);
    console.log(theNumbers);
    let result = 0;
    for (let i = 0; i < theNumbers.length; i++) {
      console.log('in loop');
      const currentKey = theNumbers[i];
      const tripleValue = triplesInOneNumbers[currentKey];
      const doubleValue = doublesInTwoNumbers[currentKey];
      if (doubleValue === undefined) {
        continue;
        console.log('in continue');
      } else if (tripleValue === doubleValue){
        result += tripleValue;
        console.log('triple equals double')
      } else {
        result += Math.min(tripleValue, doubleValue);
        console.log('discrepincy');
      }
    }
    return result;
  }
  
  function tripleDouble(num1, num2) {
    const triplesObject = findTriplesInOne(num1);
    const doublesObject = findDoublesInTwo(num2);
    const theTripleDouble = findtripleDouble(triplesObject, doublesObject);
    return theTripleDouble;
  }
  
  tripleDouble(444697775555, 4455779); //1