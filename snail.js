function snail(array) {
  if(array[0][0] === undefined) {
    return [];
  }

  const result = [];
  const pattern = createPatternArray(array.length);
  const currentPosition = [0, 0];
  let direction = 'right';
  for (let i = 0; i < pattern.length; i++) {
    const currentPatternTimes = pattern[i];
    for (let j = 0; j < currentPatternTimes; j++) {
      const currentRow = currentPosition[0];
      const currentColumn = currentPosition[1];
      const currentValue = array[currentRow][currentColumn];
      result.push(currentValue);

      if (j === currentPatternTimes - 1) {
        break;
      }

      if (direction === 'right') {
        currentPosition[1] = currentColumn + 1;
      } else if (direction == 'left') {
        currentPosition[1] = currentColumn - 1;
      } else if (direction === 'up') {
        currentPosition[0] = currentRow - 1;
      } else {
        currentPosition[0] = currentRow + 1;
      }
    }

    if (direction === 'right') {
      direction = 'down';
      currentPosition[0] = currentPosition[0] + 1;
    } else if (direction === 'left') {
      direction = 'up';
      currentPosition[0] = currentPosition[0] - 1;
    } else if (direction === 'up') {
      direction = 'right';
      currentPosition[1] = currentPosition[1] + 1;
    } else {
      direction = 'left';
      currentPosition[1] = currentPosition[1] - 1;
    }
  }

  return result;
}

function createPatternArray(number) {
  const result = [];
  for (let i = number; i > 0; i--) {
    if (i === number) {
      result.push(number);
    } else {
      result.push(i, i);
    }
  }
  return result;
}

// pattern:
// 3 - 2 - 2 - 1 - 1
// 4 - 3 - 3 - 2 - 2 - 1 -1