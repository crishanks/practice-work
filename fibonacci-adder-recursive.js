function fibonacci(n) {
    const fibArray = recursiveFib(n);
    console.log(fibArray);
    const result = fibArray.reduce(function(accumulator, currentNum){
      console.log(accumulator);
      return accumulator += currentNum;
    }, 0);
    return result;
  }
  
  function recursiveFib(n) {
    if (n === 2) {
      return [1, 1];
    } else if (n === 1) {
      return [1];
    } else if (n === 0) {
      return [];
    }
  
    const currentFibSequence = recursiveFib(n - 1);
  
    const lastNumber = currentFibSequence[currentFibSequence.length - 1];
    const secondToLastNumber = currentFibSequence[currentFibSequence.length - 2];
    const currentFibNumber = lastNumber + secondToLastNumber;
    currentFibSequence.push(currentFibNumber);
    return currentFibSequence;
  }
  
  fibonacci(5);