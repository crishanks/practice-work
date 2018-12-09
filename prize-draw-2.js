const createInitialNamesValuesArray = (st, we, n) => {
  const namesArray = st.split(',');
  const lettersNamesArray = namesArray.map(function(name) {
    return name.toLowerCase().split(''); 
  });
  
  const initialNamesValuesArray = lettersNamesArray.map((nameLettersArray) => {
    const reducedNameValues = nameLettersArray.reduce((accumulator, currentLetter) => {
      return accumulator + currentLetter.charCodeAt(0);
    }, 0);
    return reducedNameValues;
  });
  return initialNamesValuesArray;
}

const createTotalNameValuesArray = (initialNamesValuesArray, we) => {
  const totalNameValuesArray = initialNamesValuesArray.map((nameValue, index) => {
    return nameValue * we[index];
  });
  return totalNameValuesArray;
}

const createNamesAndValuesArray = (st, totalNameValuesArray, n) => {
  const namesArray = st.split(',');
  const namesAndValuesArray = namesArray.map((name, index) => {
    return [name, totalNameValuesArray[index]];
  });
  
  const sortedNameAndValuesArray = namesAndValuesArray.sort((a,b) => {
     if (b[1] === a[1]) {
       return a[0].charCodeAt() - b[0].charCodeAt();
     } else {
      return b[1] - a[1];
     }
  });
  console.log(sortedNameAndValuesArray);
  return sortedNameAndValuesArray[n - 1][0];
}

const rank = (st, we, n) => {
  const namesArray = st.split(',');
  if (st === '') {
    return 'No participants';
  } else if (n > namesArray.length) {
    return 'Not enough participants';
  };
  const initialNamesValues = createInitialNamesValuesArray(st, we, n);
  const totalNameValues = createTotalNameValuesArray(initialNamesValues, we);
  const result = createNamesAndValuesArray(st, totalNameValues, n);
  return result;
}

rank("baa,aab,Sofia,Michael,Andrew,Lily,Benjamin", [2, 2, 1, 4, 3, 1, 2], 4);
//'aab'