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
      return a[0] - b[0];
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

rank("William,Naoh,Lily,Daniel,Michael,James,Matthew,Jacob,Alexander,Samantha,Liam,Benjamin,Emily,Avery,Isabella,Lyli,Ava,Aubrey,Robert,Olivai,Emma,Natalie,Noah", [2,4,3,4,5,6,2,5,5,3,6,5,4,3,1,5,2,6,4,3,3,4,1], 11); // "Daniel"

//Create a initialNamesValuesArray by first creating a namesArray. give each name a number value by assigning each letter of the alphabet a number (ASCII?) and then adding the length of the name to it. 

//Then, map over the we array and multiply each number in the initialNameValuesArray by it's corresponding weight in that array to get a totalNamesValuesArray.

//Then, loop through the namesArray and the totalNamesValuesArray. Put each name and its corresponding value (values should be at the same indexes since we haven't sorted yet) into an array and push that array into a namesAndValuesArray. Sort the array by the values greatest to least.

//Last, loop through the nested namesAndValuesArray. Return the name in the nth array in the namesAndValuesArray;