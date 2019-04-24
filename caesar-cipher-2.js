const shiftLetters = (str, offset) => {
  let shiftedLetters = '';
  const lowercaseString = str.toLowerCase();
  const highestAlphabetAsciiValue = 122;
  const lowestAlphabetAsciiValue = 97;
  for (let i = 0; i < lowercaseString.length; i++) {
    const currentLetter = lowercaseString[i];
    const asciiNumber = currentLetter.charCodeAt(0);
    let offsetAsciiNumber = asciiNumber + offset;
    if (currentLetter === ' ' || asciiNumber < lowestAlphabetAsciiValue || asciiNumber > highestAlphabetAsciiValue) {
      continue;
    } else if (offsetAsciiNumber > highestAlphabetAsciiValue) {
      offsetAsciiNumber -= 26;
      shiftedLetters += String.fromCharCode(offsetAsciiNumber);
    } else if (offsetAsciiNumber < lowestAlphabetAsciiValue) {
      offsetAsciiNumber += 26;
      shiftedLetters += String.fromCharCode(offsetAsciiNumber);
    } else {
      shiftedLetters += String.fromCharCode(offsetAsciiNumber);
    }
  }
  return shiftedLetters;
}

shiftLetters('aad bvfy! ^%', -3);
//'xxayscv'

//sanitize and lowercase the string
//convert each letter to ascii value
//add offset to that number
//convert it back to a letter
//if the acii number plus the offset is greater than 122, subtract 26 from it. if less than 97, add 26
//add to the string and return it