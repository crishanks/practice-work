function findRowLengthToCreateSquareGrid(word, letters) {
  let rowLength;
  let i = 1;
  while (i < letters.length) {
    if (i * i === letters.length) {
      rowLength = i;
      break;
    }
  }
  return rowLength;
}

function createGrid(rowLength, letters) {
  let grid = [];
  for (let i = 0; i < letters.length; i += rowLength) {
    const currentLetter = letters[i];
    const rowLetters = letters.slice(i, i + rowLength)
    grid.push(rowLetters);
  }
  return grid;
}

function searchHorizontal(word, grid) {
  for (let i = 0; i < grid[0].length; i++) {
    const currentRow = grid[i];
    if (currentRow.includes(word)) {
      return true;
    }
  }
  return false;
}

function searchVertical(word, grid) {
  console.log(grid);
  let verticalGrid = '';
  for (let i = 0; i < grid[0].length; i++) {
    const currentRow = grid[i];
    for (let j = 0; j < grid[0].length; j++) {
      const currentLetter = grid[j][i];
      verticalGrid += currentLetter;
    }
    if (verticalGrid.includes(word)) {
      return true;
    }
  }
  return false;
}

function assignGridLetterValues(grid) {
  let letterPositions = [];
  let columnPositionNumbers = 1;
  let letterInAscii = 'A'.charCodeAt();
  let eachRow = [];
  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      eachRow.push(String.fromCharCode(letterInAscii) + columnPositionNumbers.toString());
      letterInAscii++;
    }
    letterPositions.push(eachRow);
    eachRow = [];
    letterInAscii = 'A'.charCodeAt();
    columnPositionNumbers++;
  }
  return letterPositions;
}

function returnWordPositions(grid, letterPositions) {
  let result = [];
  const horizontal = searchHorizontal(word, grid);
  const vertical = searchVertical(word, grid);
  if (horizontal) {
    for (let i = 0; i < letterPositions[0].length; i++) {
      result.push(letterPositions.slice())
    }
  }
}

// assignGridLetterValues(
// [ 'FHKEFFHD',
//   'FEOGIOPV',
//   'FLDKOIAQ',
//   'FLWIHQRM',
//   'UOTOXNRI',
//   'AAESRUOF',
//   'CUHHELTU',
//   'FJJSNJDO'])


searchHorizontal('HELLO',
[ 'FHEEIDPD',
  'FEOGIOPV',
  'FLDKOIAQ',
  'FLWIHQRM',
  'UOTOXNRI',
  'AAESRUOF',
  'CUHHELTU',
  'FJJSNJDO' ]);

  //