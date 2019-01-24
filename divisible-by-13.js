function numCheck(n) {
    let result = 0;
    const checkNums = [4,3,12,9,10,1];
    let numString = n.toString();
    let j = checkNums.length - 1;
  
    for (let i = numString.length - 1; i >= 0; i--) {
      if (checkNums[j] === undefined) {
        j = checkNums.length - 1;
      }
      result += numString[i] * checkNums[j];
      j--;
    }
    return result;
  }
  
  function thirt(n) {
    let resultCheckNum = numCheck(n);
    while (true) {
      let newNum = resultCheckNum.toString();
      resultCheckNum = numCheck(newNum);
      if (Number(newNum) === resultCheckNum) {
        return resultCheckNum;
      }
    }
  }

  thirt(85299258); // 31