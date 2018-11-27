function fib(num) {
    //what's the base case?
    if (num === 2) {
        return [1, 1];
    } else if (num === 1) {
        return [1];
    } else if (num === 0) {
        return [];
    }

    //how do we get to the base case?
    const firstFibNumbers = fib(num - 1);

    //create the sequence
    const lastIndex = firstFibNumbers.length - 1;
    const secondToLastIndex = firstFibNumbers.length - 2;
    const newFibSequence = firstFibNumbers[lastIndex] + firstFibNumbers[secondToLastIndex];
    return firstFibNumbers.concat([newFibSequence]);
}

fib(6);