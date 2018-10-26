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
