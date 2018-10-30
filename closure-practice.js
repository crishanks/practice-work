// Closures

// function times(num) {
//   return function(num2) {
//     return num2 * num
//   }
// }

// const timesThree(3);
// const timesFifty(50);

// //the inner function 'closes' over the parameter 'num' and the computer remembers the paremeter that was passed it was. In this case '3' remembers num is 3.

// function times(3) {
//   return function(num2) {
//     return num2 * 3
//   }
// }

// //function that returns a function that returns a function

// function times(num) {
//   return function(num2) {
//     return  function (num3) {
//       return num3 * 15;
//     }
//   }
// }

// const timesThree = times(3);
// const timesFifteen = timesThree(5);
// const timesFifteen(4);

//then becomes

function times(num1) {
  return function(num2) {
    return function(num3) {
      return num3 * (num2 * num1);
    }
  }
}

const timesThree = times(3);
const timesFifteen = timesThree(5);
const timesFifteen(4);
