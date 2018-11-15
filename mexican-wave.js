function wave(str){
    let result = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < str.length; j++) {
        if (str[j] === ' ') {
          continue;
        } else {
          const changingLetter = str[j].toUpperCase();
          const beforeLetters = str.slice(i, j);
          const afterLetters = str.slice(j + 1);
          result.push(beforeLetters + changingLetter + afterLetters);
        }
      }
      break;
    }
    return result;
  }
  
  wave("hello"); 
  //["Hello", "hEllo", "heLlo", "helLo", "hellO"]