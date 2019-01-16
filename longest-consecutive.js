function longestConsec(strarr, k) {
  let n = strarr.length; 
  let str = '';

  if (n = 0 || k > n || k <= 0) {
    return str;
  }

  for (let i = 0; i < strarr.length; i++) {
    const currentString = strarr.slice(i, i + k).join('');
    console.log(currentString);
    if (currentString.length > str.length) {
      str = currentString;
    }
  }
  return str;
}

longestConsec([ 'hi', 'hello', 'hey','h' ], 2); // "hellohey"