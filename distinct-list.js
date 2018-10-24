function distinctList(arr) {
  const createCounterObject = createCounter(arr);
  const getNumOfDuplicates = numOfDuplicates(createCounterObject);
  return getNumOfDuplicates;
}

function createCounter(arr){
  let counter = {};
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const numExists = counter[currentNumber] !== undefined;
    if (!numExists) {
      counter[currentNumber] = 1;
    } else {
      counter[currentNumber] +=1;
    }
  }
  return counter;
}

function numOfDuplicates(counter) {
  let result = 0;
  for (let key in counter) {
    let currentValue = counter[key];
    while (currentValue > 1) {
      if (currentValue > 1) {
        result++;
      }
      currentValue--;
    }
  }
  return result;
}

distinctList([0,-2,-2,5,5,5]); //3
