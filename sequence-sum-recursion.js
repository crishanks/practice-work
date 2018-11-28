function sequenceSum(start, end, sum) {
    //base cases
    if (start > end) {
      return 0;
    } else if (start >= end) {
      return end;
    }
  
    return start += sequenceSum(start + sum, end, sum);
    //this function call needs to have the same amount of parameters as the function above.
  }
  
  sequenceSum(2, 6, 2);//12