function productFib(prod){
    let result = [];
    let fibArray = [1,1];
  
    let lastFibNum = fibArray[fibArray.length - 1];
    let secondToLastFibNum = fibArray[fibArray.length - 2];
    let nextFibNum = lastFibNum + secondToLastFibNum;
    while (lastFibNum * secondToLastFibNum < prod) {
      lastFibNum = fibArray[fibArray.length - 1];
      secondToLastFibNum = fibArray[fibArray.length - 2];
      nextFibNum = lastFibNum + secondToLastFibNum;
      fibArray.push(nextFibNum);
    }
  
    result.push(secondToLastFibNum);
    result.push(lastFibNum);
  
    const resultTotal = result.reduce(function(total, num) {
      return total * num;
    });
    if (resultTotal === prod) {
      result.push(true);
    } else {
      result.push(false);
    }
    return result;
  }
  
  productFib(4895);
  
  //create a fibonacci sequence. Create and add fibonacci numbers to the existing array until the product of currentFibNum and NextFibNum is greater than or equals prod. If the product equals prod, push currentFibNum. Push NextFibNum. Push True, or if not, push False.