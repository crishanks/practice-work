function nextBigger(n) {
    const nArray = n.toString().split('');
  
    let pivot;
    let indexOfPivot;
    let rightArray;
    let leftArray;
    for (let i = nArray.length - 1; i > 0; i--) {
      const currentNum = nArray[i];
      const compareNum = nArray[i - 1];
      if (compareNum < currentNum) {
        pivot = compareNum;
        indexOfPivot = i - 1;
        leftArray = nArray.slice(0, i - 1);
        rightArray = nArray.slice(i);
        console.log('pivot: ', pivot);
        console.log('indexOfPivot: ', indexOfPivot);
        console.log('leftArray: ', leftArray);
        console.log('rightArray: ', rightArray);
        break;
      }
    }
  
    if (rightArray === undefined || leftArray === undefined) {
      return -1;
    }
  
    let lowestNumGreaterThanPivot;
    let indexOfLowestNumGreaterThanPivot;
    const sortedRightArray = rightArray.sort();
    for (let i = 0; i < sortedRightArray.length; i++) {
      const currentNum = sortedRightArray[i];
      if (currentNum > pivot) {
        if (lowestNumGreaterThanPivot === undefined || currentNum < lowestNumGreaterThanPivot) {
          lowestNumGreaterThanPivot = currentNum;
          indexOfLowestNumGreaterThanPivot = i;
          console.log('lowestNumGreaterThanPivot: ', lowestNumGreaterThanPivot);
          console.log('indexOfLowestNumGreaterThanPivot: ', indexOfLowestNumGreaterThanPivot);
        }
      }
    }
  
    rightArray.splice(indexOfLowestNumGreaterThanPivot, 1);
    rightArray.push(pivot);
    rightArray = rightArray.sort();
    rightArray.unshift(lowestNumGreaterThanPivot);
    console.log('newRightArray: ', rightArray)
  
    const result = Number(leftArray.concat(rightArray).join(''));
    if (result > n) {
      return result;
    } else {
      return -1;
    }
  }
  
  nextBigger(21581957621); //21581961257