const removeNb = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    for (let i = 1; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const currentProduct = i * j;
        const currentSum = i + j;
        const finalSum = sum - currentSum;
        if (j * i > finalSum) {
          j = n;
        }
        if (i * i > finalSum) {
          return [];
        } else if (currentProduct === sum - currentSum){
          return [[i, j], [j, i]];
        }
      }
    }
  }
  
  removeNb(26); //[[15, 21], [21, 15]