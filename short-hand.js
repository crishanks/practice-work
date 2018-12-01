function shorthand(str) {
    const objectLettersCount = createLettersCountObject(str);
    console.log(objectLettersCount);
    const objectToString = convertObjectToString(objectLettersCount);
    console.log(objectToString);
    return objectToString.join('');
   }
   
   function createLettersCountObject(str) {
     let lettersCountObject = {};
     let resultArray = [];
     for (let i = 0; i < str.length; i++) {
       const currentLetter = str[i];
       const letterExists = lettersCountObject[currentLetter] !== undefined;
       if (!letterExists) {
         lettersCountObject[currentLetter] = 1;
       } else if (letterExists) {
         lettersCountObject[currentLetter] += 1;
       }
     }
     return lettersCountObject;
   }
   
   function convertObjectToString(lettersCountObject) {
     let combinedResult = [];
     for(key in lettersCountObject) {
       const currentValue = lettersCountObject[key];
       combinedResult.push(currentValue);
       combinedResult.push(key);
     }
     return combinedResult;
   }
   
   
   shorthand('wweea');
   // '2w2e1a'
   