function sumPairs(integerArray, sum) {
    // O(n)
    let foundNumbers = {};
    for (let i = 0; i < integerArray.length; i++) {
      const currentNum = integerArray[i];
      const complementaryNumber = sum - currentNum;
      if (foundNumbers[complementaryNumber]) {
        return [complementaryNumber, currentNum];
      } else {
        foundNumbers[currentNum] = true;
      }
    }
  }
  sumPairs([1,2,3,4,1,0], 2);//[1,1]



// const sumPairs = function(int_array, sum) {
//     let indexOfSecondSumNum = int_array.length;
//     let earliestPair = undefined;
//     for (let i = 0; i < int_array.length - 1; i++) {
//       const currentNum = int_array[i];
//       for (let j = i + 1; j < int_array.length; j++) {
//         const checkNum = int_array[j];
//         if (currentNum + checkNum === sum && j <= indexOfSecondSumNum) {
//           indexOfSecondSumNum = j;
//           earliestPair = [currentNum, checkNum];
//         } 
//       }
//     }
//     return earliestPair;
//   }
  
//   sumPairs([10,3,7,3,7,0], 10); //[3,7]


