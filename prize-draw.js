const alphabetMap = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };

function rank(st, weights, n) {
  if (st === '') {
    return "No participants";
  } else if (n > weights.length) {
    return "Not enough participants";
  }

  const theNameValues = getNameValues(st, weights);
  const theFinalScores = getFinalScores(theNameValues, weights);
  const theNameObject = getNameObject(st, theFinalScores);
  const theNameValueArray = getNameValueArray(theFinalScores, theNameObject);
  const theSortedNames = sortNames(theNameValueArray);
  return theSortedNames[n - 1][0];
}


function getNameValues(st, weights) {
  let nameValues = [];
  let currentNameValue = 0;
  const lowercaseString = st.toLowerCase();
  const lowercaseNamesArray = lowercaseString.split(',');

  lowercaseNamesArray.forEach(function(name) {
    for (let i = 0; i < name.length; i++) {
      const currentLetter = name[i];
      const currentValue = alphabetMap[currentLetter];
      currentNameValue += currentValue;
    }
    nameValues.push(currentNameValue + name.length);
    currentNameValue = 0;
  });

  let finalScores = [];
  for (let i = 0; i < nameValues.length; i++) {
    finalScores.push(nameValues[i] * weights[i]);
  }
  return nameValues;
}

function getFinalScores(nameValues, weights) {
  let finalScores = [];
  for (let i = 0; i < nameValues.length; i++) {
    finalScores.push(nameValues[i] * weights[i]);
  }
  return finalScores;
}

function getNameObject(st, finalScores) {
  const namesArray = st.split(',');
  const nameObject = {};
  for (let i = 0; i < namesArray.length; i++) {
    const currentName = namesArray[i];
    const nameExists = nameObject[currentName] !== undefined;
    if (!nameExists) {
      nameObject[currentName] = finalScores[i];
    }
  }
  return nameObject;
}

function getNameValueArray(finalScores, nameObject) {
  const names = Object.keys(nameObject);
  const nameArray = names.map((name) => {
    return [name, nameObject[name]];
  });
  return nameArray;
}

function sortNames(nameArray) {
  console.log(nameArray)
  const sortedNames = nameArray.sort(function(a, b) {
    const aValue = a[1];
    const bValue = b[1];
    if (aValue !== bValue) {
      return bValue - aValue;
    } else {
      const aChar = String(a[0][0].toLowerCase()).charCodeAt(0);
      const bChar = String(b[0][0].toLowerCase()).charCodeAt(0);
      return aChar - bChar;
    }
  });
  return sortedNames;
}

rank('Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden', [ 1, 3, 5, 5, 3, 6 ], 2); // "Matthew")
