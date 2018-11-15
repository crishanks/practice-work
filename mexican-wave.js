function wave(str){
    let result = [];
      for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
          continue;
        } else {
          const changingLetter = str[i].toUpperCase();
          const beforeLetters = str.slice(0, i);
          const afterLetters = str.slice(i + 1);
          result.push(beforeLetters + changingLetter + afterLetters);
        }
      }
    return result;
  }
  
  wave("hello"); 
  //["Hello", "hEllo", "heLlo", "helLo", "hellO"]