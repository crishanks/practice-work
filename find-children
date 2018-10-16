function findChildren(str) {
  let result = '';
  let lettersObject = {};
  const rearrangedString = str.split('').sort(function(a,b) {
    return a.charCodeAt() - b.charCodeAt();
  });
  console.log(rearrangedString);

  for (let i = 0; i < rearrangedString.length; i++) {
    const currentLetter = rearrangedString[i];
    if (currentLetter === currentLetter.toLowerCase()) {
      lettersObject[currentLetter.toUpperCase()].push(currentLetter);
    } else if (currentLetter === currentLetter.toUpperCase()) {
      lettersObject[currentLetter] = [];
    }
  }

  for (let key in lettersObject) {
    const currentValue = lettersObject[key];
    result += key + currentValue.join('');
  }
  return result;
}

findChildren('AbBabbaaC'); //AaaaBbbC;
