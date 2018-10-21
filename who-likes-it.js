function likes(names) {
  let result = '';

  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    for (let i = 0; i < names.length; i++) {
      const currentName = names[i];
      if (names.length === 1) {
        return `${currentName} likes this`
      }
    }
  } else if (names.length === 2) {
    for (let i = 0; i < names.length; i++) {
      const currentName = names[i];
      if (i !== names.length - 1) {
        result += `${currentName} `
      } else {
        result += `and ${currentName} `
      }
    }
    return result += 'like this';
  } else if (names.length === 3) {
    for (let i = 0; i < names.length; i++) {
      const currentName = names[i];
      if (i === names.length - 1) {
       result += `and ${currentName} `
      } else if (i === names.length - 2){
        result += `${currentName} `
      } else {
        result += `${currentName}, `
      }
    }
    return result += 'like this'
  } else {
    let i = 0;
    while (i < 2) {
      const currentName = names[i];
      if (i === 0) {
        result += `${currentName}, `
      } else if (i === 1) {
        result += `${currentName} `
      } else {
        result += `and ${currentName} `
      }
      i++;
    }
    const remainingNumber = names.length - i;
    console.log(remainingNumber)
    if (remainingNumber > 1) {
      return result += `and ${remainingNumber} others like this`;
    } else {
      return result += `and ${remainingNumber} other likes this`;
    }
  }
}

likes(['Mark', 'John', 'Max', 'Steve']);
