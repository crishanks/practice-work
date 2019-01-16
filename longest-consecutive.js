function findLongestString(strarr) {
    let currentLongest = '';
    let currentLongestLength = 0;
  
    strarr.forEach((word) => {
      if (word.length > currentLongestLength) {
        currentLongest = word;
        currentLongestLength = word.length;
      }
    });
    return currentLongest;
  }
  
  function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
      return '';
    }
    const currentLongest = findLongestString(strarr);
    let longestConsecutive = [];
    let currentLongestConsecutive = 0;
    for (let i = 1; i < strarr.length - 1; i++) {
      const currentString = strarr[i];
      const checkStringAfter = strarr[i + (k - 1)];
      const checkStringBefore = strarr[i + (k - 3)];
      if (currentLongest === currentString) {
        // console.log('currentLongest: ', currentLongest);
        // console.log("currentString: ", currentString);
        // console.log('checkStringBefore: ', checkStringBefore);
        // console.log('checkStringAfter: ', checkStringAfter);
        if (currentString.length + checkStringBefore.length > currentString.length + checkStringAfter.length) {
          if (currentString.length > checkStringBefore.length) {
            currentLongestConsecutive = currentString.length + checkStringBefore.length;
            longestConsecutive.push(currentString, checkStringBefore);
            } else {
              currentLongestConsecutive = currentString.length + checkStringBefore.length;
              longestConsecutive.push(checkStringBefore, currentString);
            }
        } else if (currentString.length + checkStringAfter.length > currentString.length + checkStringBefore.length) {
          if (currentString.length > checkStringAfter.length) {
            currentLongestConsecutive = currentString.length + checkStringAfter.length;
            longestConsecutive.push(currentString, checkStringAfter);
          } else {
            currentLongestConsecutive = currentString.length + checkStringBefore.length;
            longestConsecutive.push(checkStringBefore, currentString);
          }
        }
      }
    }
    return longestConsecutive.join('');
  }
  
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2); // "abigailtheta"