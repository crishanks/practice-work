const persistence = (num) => {
  let counter = 0;
  let numString = num.toString();
  while(numString.length > 1) {
    counter++;
    numString = numString.split('').map(Number).reduce((a, b) => {return a * b}).toString();
  }
  return counter;
}

persistence(999);
//4

//set up a counter
//turn the num into a string so we can check its length
//while the numString's length > 1:
// increment the counter,
//turn all the num strings into integers, and times them all together,
//then turn the reduced result back into a string
