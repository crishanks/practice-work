function findMissing(list) {
    const smallestDifference = findSmallestDifference(list);
    return missingSequence(list, smallestDifference);
  }
  
  function findSmallestDifference(list) {
    let smallestDifference;
    for (let i = 0; i < list.length - 1; i++) {
      const currentNumber = list[i];
      const nextNumber = list[i + 1];
      const currentDifference = Math.abs(currentNumber - nextNumber);
  
      if (smallestDifference === undefined || currentDifference < smallestDifference) {
        smallestDifference = currentDifference;
      }
    }
    return smallestDifference;
  }
  
  function missingSequence(list, smallestDifference) {
    for (let i = 0; i < list.length - 1; i++) {
      const currentItem = list[i];
      const nextItem = list[i + 1];
  
      const max = Math.max(currentItem, nextItem);
      const min = Math.min(currentItem, nextItem);
  
  
      
      if (max - min !== smallestDifference) {
        
        console.log('currentItem: ', currentItem);
        console.log('nextItem: ', nextItem);
        return min + smallestDifference;
      }
    }
  }
  
  findMissing([1, 7, 10]); //4