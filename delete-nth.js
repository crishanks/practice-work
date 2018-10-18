function deleteNth(arr, n) {
  let result = [];
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const numberExists = map[currentNumber] !== undefined;
    if (!numberExists) {
      map[currentNumber] = 1;
      if (map[currentNumber] <= n) {
        result.push(currentNumber);
      }
    } else if (numberExists) {
      map[currentNumber] += 1;
      if (map[currentNumber] <= n) {
        result.push(currentNumber);
      }
    }
  }
  return result;
}

deleteNth([1,1,3,3,7,2,2,2,2], 3); //[1, 1, 3, 3, 7, 2, 2, 2]);
