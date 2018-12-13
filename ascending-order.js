function isAscending(str) {
    for (let i = 0; i < str.length - 1; i++) {
      const currentLetter = str[i];
      const nextLetter = str[i + 1];
      if (nextLetter.charCodeAt(0) < currentLetter.charCodeAt(0)) {
        return false;
      }
    }
    return true;
  }
  
  function largestAscendingSubstring(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const slicedString = str.slice(i);
      for (let j = 0; j < slicedString.length; j++) {
        const checkedSubstring = slicedString.slice(0, j + 1);
        const isInAscendingOrder = isAscending(checkedSubstring);
        if (isInAscendingOrder && checkedSubstring.length > result.length) {
          result = checkedSubstring;
        }
      }
    }
    return result;
  }
  
  largestAscendingSubstring('adealszjdf'); //'alsz'
  
  // The largestAscendingOrder function will take in any string. It should return the largest substring where the letters are in ascending order. So if I give you 'adealszjdf' the largest ascending substring would be 'alsz' because all the letters in there are going from smallest (closest to a) to the greatest (closest to z) and it's the longest occurence of that pattern.