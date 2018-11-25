// Stock Profit
//function that finds the lowest number in an array, then the highest number after the lowest number, and returns the higest number after the lowest number - the lowest number.

function stockProfit(pricesArray) {
    let lowestPrice = pricesArray[0];
    let indexOfLowestPrice = 0;
    for (let i = 0; i < pricesArray.length; i++) {
      const currentPrice = pricesArray[i];
      if (currentPrice < lowestPrice) {
        lowestPrice = currentPrice;
        indexOfLowestPrice = i;
      }
    }
  
    const pricesArrayAfterLowestPrice = pricesArray.slice(indexOfLowestPrice + 1);
    const highestItem = Math.max(...pricesArrayAfterLowestPrice);
    return highestItem - lowestPrice;
  }
  
  
  stockProfit([0,12,2,5,9]);//12