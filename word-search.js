function createGrid(words, puzzle) {
  const puzzleLength = puzzle.length;
  let rowLength;
  let i = 1;
  while (i < puzzleLength) {
    if (i * i === puzzleLength) {
      rowLength = i;
    }
    i++;
  }

  let grid = [];
  console.log(puzzle);
  for (let i = 0; i < puzzleLength; i += rowLength) {
    const letterRow = puzzle.slice(i, i + rowLength);
    rows.push(letterRow)
  }
  return grid;
}

function getLongestWord(words, grid) {
  let longestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}

function checkHorizontal(word, grid) {
  for(let row = 0; row < grid.length; row++) {
    const currentRow = grid[row];
    console.log(currentRow)
    if (currentRow.includes(word)) {
      return true;
    }
  }
  return false;
}

function checkVertical(word, grid) {
  const squareLength = grid[0].length;
  for (let row = 0; row < squareLength; row++) {
    let columnLetters = '';
    for (let column = 0; column < squareLength; column++) {
      const currentLetter = grid[column][row];
      columnLetters += currentLetter;
    }

    if (columnLetters.includes(word)) {
      return true;
    }
  }
  return false;


}

// function checkDiagonal() {

// }



checkHorizontal("HELLO",
['FHELLPPD',
 'FEOGIOPV',
 'FLDKOIAQ',
 'FLWIHQRM',
 'UOTOXNRI',
 'AAESRUOF',
 'CUHHELTU',
 'FJJSNJDO']);

// checkVertical("HELLO",
// [
//   'FHKEFFHD',
//   'FEOGIOPV',
//   'FLDKOIAQ',
//   'FLWIHQRM',
//   'UOTOXNRI',
//   'AAESRUOF',
//   'CUHHELTU',
//   'FJJSNJDO'
// ]);


// createPuzzle(['HELLO', 'WORLD'], 'FHKEFFHDFEOGIOPVFLDKOIAQFLWIHQRMUOTOXNRIAAESRUOFCUHHELTUFJJSNJDO');
// [ [ 'B1', 'B2', 'B3', 'B4', 'B5' ],
//   [ 'C4', 'D5', 'E6', 'F7', 'G8' ] ]);
