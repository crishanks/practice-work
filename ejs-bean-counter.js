function countBs(str) {
  let bCount = 0;
  str.split('').forEach((letter) => {
    if (letter === 'B') {
      bCount++;
    }
  });
  return bCount;
}

countBs('bbBBBCcdefG');
function countChar(str, letter) {
  let letterCount = 0;
  str.split('').forEach((checkLetter) => {
    if (checkLetter === letter) {
      letterCount++;
    }
  });
  return letterCount;
}
countChar('hasjfakwebfHHH', 'H');
