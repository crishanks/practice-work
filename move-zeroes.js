function moveZeroes(str) {
    let notZeroes = [];
    let zeroes = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== 0) {
        notZeroes.push(str[i]);
      } else {
        zeroes.push(str[i]);
      }
    }
    return notZeroes.concat(zeroes);
  }
  
  moveZeroes([1,2,0,1,0,1,0,3,0,1]); // [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]