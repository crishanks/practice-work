function persistence(num) {
  let timesMulitplied = 0;
  let multiplicationResult;
  let numberArray = num.toString().split('');
  let sum = 1;

  if (num < 10) {
    return 0;
  }else {
    do {
      for (let i = 0; i < numberArray.length; i++) {
        const currentNumber = parseInt(numberArray[i]);
        sum *= currentNumber;
      }
      timesMulitplied++;
      multiplicationResult = sum;
      numberArray = multiplicationResult.toString().split('');
      sum = 1;
    }
    while (multiplicationResult >= 10);

  }
  return timesMulitplied;
}

persistence(25); //4
