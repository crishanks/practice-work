function makeValley(arr) {
  sortedArray = arr.sort((a,b) => {
    return (b - a);
  });
  const leftValley = sortedArray.filter((_, index) => {
    return index % 2 === 0;
  });
  const rightValley = sortedArray.filter((_, index) => {
    return index % 2 !== 0;
  });
  return leftValley.concat(rightValley.reverse());
}

makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]);
//[17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17])
