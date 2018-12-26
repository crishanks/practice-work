var maxSequence = function(arr){
    let greatestSubstringSum = 0;
    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      for (let j = 1; j < arr.length; j++) {
        const checkNum = arr[j];
        const substring = arr.slice(i, j + 1);
        const substringSum = substring.reduce((accumulator, currentValue) => {
          return accumulator += currentValue;
        }, 0);
        if (substringSum > greatestSubstringSum) {
          greatestSubstringSum = substringSum;
        }
      }
    }
    if (greatestSubstringSum > 0) {
      return greatestSubstringSum;
    } else {
      return 0;
    }
  }
  
  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); //6