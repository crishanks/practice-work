//Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// var maxProfit = function(prices) {
//   let result = 0;
//   let currentNum = prices[0];
//   for (let i = 1; i < prices.length; i++) {
//     const currentCheckNum = prices[i];
//     if (currentCheckNum > currentNum) {
//       result += (currentCheckNum - currentNum); 
//     }
//     currentNum = currentCheckNum;
//   }
//   return result;
// };

//REFACTORED
var maxProfit = function(prices) {
  return prices.reduce((result, currentValue, index, array) => {
    return currentValue > array[index - 1] ? result += (currentValue - array[index - 1]) : result;
  }, 0);
};

maxProfit([7,1,5,3,6,4]);

