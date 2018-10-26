// function findChildren(str) {
//   let result = '';
//   let lettersObject = {};
//   const rearrangedString = str.split('').sort(function(a,b) {
//     return a.charCodeAt() - b.charCodeAt();
//   });
//
//   for (let i = 0; i < rearrangedString.length; i++) {
//     const currentLetter = rearrangedString[i];
//     if (currentLetter === currentLetter.toLowerCase()) {
//       lettersObject[currentLetter.toUpperCase()].push(currentLetter);
//     } else if (currentLetter === currentLetter.toUpperCase()) {
//       lettersObject[currentLetter] = [];
//     }
//   }
//
//   for (let key in lettersObject) {
//     const currentValue = lettersObject[key];
//     result += key + currentValue.join('');
//   }
//   return result;
// }
//
// findChildren('AbBabbaaC'); //AaaaBbbC;

function createObject(str) {
  let lettersObject = {};

  const rearrangedString = str.split('').sort((a, b) => {
   return a.charCodeAt() - b.charCodeAt();
  });

  for (let i = 0; i < rearrangedString.length; i++) {
    const currentLetter = rearrangedString[i];
    if (currentLetter === currentLetter.toLowerCase()) {
      lettersObject[currentLetter.toUpperCase()].push(currentLetter);
    } else if (currentLetter === currentLetter.toUpperCase()) {
      lettersObject[currentLetter] = [];
    }
  }
  return lettersObject;
}

function lettersToString(lettersObject) {
  let result = '';
  for (let key in lettersObject) {
    const currentValue = lettersObject[key];
    result += key + currentValue.join('');
  }
  return result;
}

function findChildren(str) {
  const theObject = createObject(str);
  const result = lettersToString(theObject);
  return result;
}

findChildren('AbBabbaaC'); //AaaaBbbC
