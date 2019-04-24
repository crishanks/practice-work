function shiftLetters(offset, str) {
    let result = '';
    const lowercaseString = str.toLowerCase();
    for (let i = 0; i < lowercaseString.length; i++) {
      const currentLetter = lowercaseString[i];
      const asciiNumber = currentLetter.charCodeAt();
      const offsetAsciiNumber = asciiNumber + offset;
      const offsetAsciiLetter = String.fromCharCode(offsetAsciiNumber);
      if (currentLetter === ' ') {
        continue;
      } else if (offsetAsciiNumber > 122) {
        result += String.fromCharCode(offsetAsciiNumber - 26);
      } else if (offsetAsciiNumber < 97) {
          result += String.fromCharCode(offsetAsciiNumber + 26);
        } else {
        result += offsetAsciiLetter;
      }
    }
    return result;
  }
  
  shiftLetters(-3, 'aa');
  
  
  shiftLetters(3, 'a zc');//'def'