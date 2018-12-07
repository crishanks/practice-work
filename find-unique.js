function createNumberObject(arr) {
    let numberCounter = {};
    arr.forEach(function(num) {
      if (numberCounter[num] === undefined) {
        numberCounter[num] = 1;
      } else if (numberCounter[num] !== undefined) {
        numberCounter[num] += 1;
      }
    });
    return numberCounter;
  }
  
  function findUniqueNum(numberCounter) {
    for (let key in numberCounter) {
      if (numberCounter[key] === 1) {
        return Number(key);
      }
    }
  }
  
  function findUniq(arr) {
    const theCounterObject = createNumberObject(arr);
    const result = findUniqueNum(theCounterObject);
    return result;
  }