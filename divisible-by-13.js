function numCheck(n) {
    let result = 0;
    const checkNums = [4,3,12,9,10,1];
    let numString = n.toString();
    let j = checkNums.length - 1;
  
    for (let i = numString.length - 1; i >= 0; i--) {
      if (checkNums[j] === undefined) {
        j = checkNums.length - 1;
      }
      console.log('result: ', result);
      console.log('numString[i]: ', numString[i]);
      console.log('checkNums[j]: ', checkNums[j]);
      result += numString[i] * checkNums[j];
      j--;
    }
    return result;
  }
  
  function checkResult(n) {
    const resultCheckNum = numCheck(n);
    console.log('resultCheckNum: ', resultCheckNum);
    if (resultCheckNum % 13 === n % 13) {
      return resultCheckNum;
    } else {
      let newNum = resultCheckNum.toString();
      numCheck(newNum);
    }
  }
  
  checkResult(85299258); // 31