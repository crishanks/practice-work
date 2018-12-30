function isSandwich(str) {
  const vowel = new Set(['a', 'e', 'i', 'o', 'u']);
  const firstLetterIsVowel = vowel.has(str[0]);
  const lastLetterIsVowel = vowel.has(str[str.length - 1]);
  const canBeSandwich = str.length > 2;

  if (!firstLetterIsVowel || !lastLetterIsVowel || !canBeSandwich) {
    return false;
  }

  for (let i = 1; i < str.length - 2; i++) {
    const currentLetter = str[i];
    if (vowel.has(currentLetter)) {
      return false;
    }
  }
  return true;
}

function longestSandwich(str) {
  const result = '';
  for (let i = 0; i < str.length; i++) {
   const slicedString = str.slice(i);
    for (let j = 0; j < slicedString.length; j++) {
      const checkedSubstring = slicedString.slice(0, j + 1);
      const isAVowelSandwich = isSandwich(checkedSubstring);
      if (isAVowelSandwich && checkedSubstring.length > result.length) {
       result = checkedSubstring;
      }
   }
 }
  return result;
}

longestSandwich('helloworld');
 //'ello'