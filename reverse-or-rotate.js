const revrot = (str, size) => {
  if (size <= 0 || str === '' || size > str.length) {
    return '';
  }

  let result = '';
  for (let i = 0; i < str.length; i += size) {
    const substring = str.slice(i, size + i);
    const substringSum = substring.split('').reduce(function(accumulator, currentValue) {
      return accumulator + Number(currentValue);
    }, 0);
    const sumCubedIsDivisibleBy2 = Math.pow(substringSum, 3) % 2 === 0;
    if (substring.length < size) {
      continue;
    } else if (sumCubedIsDivisibleBy2) {
      result += substring.split('').reverse().join('');
    } else {
      result += substring.slice(1) + substring[0];
    }
  }
  return result
}

revrot("733049910872815764", 5); // '330479108928157'

// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".