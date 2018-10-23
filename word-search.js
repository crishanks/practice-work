function wordSearch(words, puzzle) {
  let result = ''

  for (let column = 0; column < 8; column++) {
    for (let row = 0; row < 8; row++) {
      const currentLetter = puzzle[row];
      result += currentLetter;
    }
  }
  return result;
}

wordSearch(['HELLO', 'WORLD'], 'FHKEFFHDFEOGIOPVFLDKOIAQFLWIHQRMUOTOXNRIAAESRUOFCUHHELTUFJJSNJDO');
// [ [ 'B1', 'B2', 'B3', 'B4', 'B5' ],
//   [ 'C4', 'D5', 'E6', 'F7', 'G8' ] ]);

//create a result array. if the grid is a = h and 1 - 8, create a nested loop that goes 8 times. split up the words into arrays of letters. if the letters of the words match the letters in the puzzle, return their position.
