function createString(n) {
    return str = n.toString();
  }
  
  function reverseRecursive(str) {
    if (str.length === 0 || str.length === 1) {
      return str;
    }
    const lastLetter = str[str.length - 1];
    const everythingExceptLastLetter = str.slice(0, str.length - 1);
    return lastLetter + reverseRecursive(everythingExceptLastLetter);
  }
  
  function reverse(n) {
    const stringFromNum = createString(n);
    const reverseString = reverseRecursive(stringFromNum);
    return parseInt(reverseString);
  }
  
  reverse(1933724); //4273391