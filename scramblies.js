function scramble(str1, str2) {
  let lettersNeeded = {};

  for (let i = 0; i < str2.length; i++) {
    const currentLetter = str2[i];
    const letterExists = lettersNeeded[currentLetter] !== undefined;
    if (!letterExists) {
      lettersNeeded[currentLetter] = 1;
    } else {
      lettersNeeded[currentLetter] += 1;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    const currentLetter = str1[i];
    const letterNeededExists = !!lettersNeeded[currentLetter];
    if (letterNeededExists) {
      lettersNeeded[currentLetter] -= 1;
    }
  }

  for (let key in lettersNeeded) {
    if (lettersNeeded[key] > 0) {
      return false;
    }
  }
  return true;
}

scramble('rkqodlw','world'); //true