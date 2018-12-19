const sum_pairs = function(int_array, sum) {
    let indexOfSecondSumNum = int_array.length;
    let earliestPair = undefined;
    for (let i = 0; i < int_array.length - 1; i++) {
      const currentNum = int_array[i];
      for (let j = i + 1; j < int_array.length; j++) {
        const checkNum = int_array[j];
        if (currentNum + checkNum === sum && j <= indexOfSecondSumNum) {
          indexOfSecondSumNum = j;
          earliestPair = [currentNum, checkNum];
        } 
      }
    }
    return earliestPair;
  }
  
  sum_pairs([10,3,7,3,7,0], 10); //[3,7]


//   function sum_pairs(int_array, sum) {
//     let pairsObject = {};
//     int_array.forEach(function(num) {
//       const exists = pairsObject[num] !== undefined;
//       if (!exists) {
//         pairsObject[num] = true;
//       }
//     });
//     console.log(pairsObject)
  
//     let result = undefined;
//     for (let key in pairsObject) {
//       if (pairsObject[sum - Number(key)] === true) {
//         console.log([Number(key), sum - Number(key)])
//         result = [Number(key), sum - Number(key)]
//       }
//     }
//     if (result !== undefined) {
//       result.sort(function(a,b) {
//         return int_array.indexOf(a) - int_array.indexOf(b);
//       });
//     }
//     return result
//   }
//   sum_pairs([0,2,0], 0);//