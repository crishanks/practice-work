function revrot(str, sz) {
    let result = ""
    for (let i = 0; i < str.length; i += sz) {
      const substring = str.slice(i, i + sz);
      if (substring.length >= sz) {
        const substringArray = substring.split('');
        console.log(substringArray)
        const substringSum = substringArray.reduce(function (accumulator, currentValue) {
          return accumulator + parseInt(currentValue);
        }, 0);
        console.log(substringSum)
        if (Math.pow(substringSum, 3) % 2 === 0) {
          result += substringArray.reverse().join('');
        } else {
          result += substring.slice(1) + substring[0];
        }
      }
    }
    return result
  }
  
  revrot("123456987654", 6); // "234561876549"