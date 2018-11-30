var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance === false) {
  console.log("Thank you. Have a nice day!");
} else {
  if (isActive === true && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2).toString() + ".");
  } else {
    if (isActive === false) {
      console.log("Your account is no longer active.")
    } else {
      if (balance === 0) {
        console.log("Your account is empty.")
      } else if (balance > 0) {
        console.log("Your balance is negative. Please contact bank.")
      }
    }
  }
}