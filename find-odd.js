function findOdd(A) {
	let numberCount = {};
  A.forEach((num) => {
    if (numberCount[num]) {
      numberCount[num] +=1;
    } else {
      numberCount[num] = 1;
    }
  });

  for (let key in numberCount) {
    if (numberCount[key] % 2 !== 0) {
      return Number(key);
    }
  }
}

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]); //5