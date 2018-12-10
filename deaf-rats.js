const countDeafRats = function(town) {
    let deafRats = 0;
    const leftRats = town.slice(0, town.indexOf('P'));
    const rightRats = town.slice(town.indexOf('P') + 1);
    
    for (let i = 0; i < leftRats.length - 1; i++) {
      const currentValue = leftRats[i];
      const nextValue = leftRats[i + 1];
      if (currentValue === ' ') {
        continue;
      } else if (currentValue + nextValue === 'O~') {
        deafRats++;
        i++;
      } else {
        i++;
      }
    }
  
    for (let i = 0; i < rightRats.length - 1; i++) {
      const currentValue = rightRats[i];
      const nextValue = rightRats[i + 1];
      if (currentValue === ' ') {
        continue;
      } else if (currentValue + nextValue === '~O') {
        deafRats++;
        i++;
      } else {
        i++;
      }
    }
    return deafRats;
  }
  
  countDeafRats("~O~O ~O~OP~O~O O~"); //2