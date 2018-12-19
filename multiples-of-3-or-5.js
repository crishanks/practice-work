function solution(number){
    let multiplesSum = 0;
    let i = 0;
    while (i < number) {
      if (i % 3 === 0 || i % 5 === 0) {
        multiplesSum += i;
      }
      i++;
    }
    return multiplesSum;
  }
  
  solution(50); //543