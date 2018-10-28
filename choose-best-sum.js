function chooseBestSum(maxMiles, numOfTowns, arrOfDistances) {
console.log(maxMiles, numOfTowns, arrOfDistances)
  if (arrOfDistances.length < numOfTowns) {
    return null;
  }
  let highestMilesUnderMaxMiles = 0;
  let currentMaxMiles = 0;
  for (let i = 0; i < arrOfDistances.length; i++) {
    const currentNumber = arrOfDistances[i];
    for (let j = 1; j <= numOfTowns; j++) {
      //this is my problem. How do i account for an always changing numOfTowns variable?
      const firstCheckNumber = arrOfDistances[j];
      const secondCheckNumber = arrOfDistances[j + 1];
      const arrOfDistancesToAdd = [currentNumber, firstCheckNumber, secondCheckNumber]
      console.log(arrOfDistancesToAdd);
      for (let k = 0; k < numOfTowns; k++) {
        const currentNumber = arrOfDistancesToAdd[k];
        currentMaxMiles += currentNumber;
        console.log(currentMaxMiles)
        if (currentMaxMiles > highestMilesUnderMaxMiles && currentMaxMiles <= maxMiles) {
        highestMilesUnderMaxMiles = currentMaxMiles;
      }
      }
      currentMaxMiles = 0;
    }
  }
  return highestMilesUnderMaxMiles;
}

chooseBestSum(331, 4, [ 91, 74, 73, 85, 73, 81, 87 ]);
