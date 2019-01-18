function hist(str) {
    let result = '';
    let uCount = 0;
    let wCount = 0;
    let xCount = 0;
    let zCount = 0;
    const sortedString = str.split('').sort().join('');
    for (let i = 0; i < sortedString.length; i++) {
      const currentLetter = sortedString[i];
      if (currentLetter === 'u') {
        uCount++;
      }  else if (currentLetter === 'w') {
        wCount++;
      } else if (currentLetter === 'x') {
        xCount++;
      } else if (currentLetter === 'z') {
        zCount++;
      }
    }
  
    let starsAndEnd = '';
    if (uCount !== 0) {
      result += `u  ${uCount}     `
      while (uCount > 0) {
        starsAndEnd += '*';
        uCount --;
      }
      starsAndEnd += '\r';
      result += starsAndEnd;
      starsAndEnd = ''
    }
  
    if(wCount !== 0) {
      result +=  `w  ${wCount}     `
      while (wCount > 0) {
        starsAndEnd += '*';
        wCount--;
      }
      starsAndEnd += '\r';
      result += starsAndEnd;
      starsAndEnd = '';
    }
  
    if (xCount !== 0) {
      result +=  `x  ${xCount}     `
      while (xCount > 0) {
        starsAndEnd += '*';
        xCount--;
      }
      starsAndEnd += '\r';
      result += starsAndEnd;
      starsAndEnd = '';
    }
    
    if (zCount !== 0) {
      result +=  `z  ${zCount}     `
      while (zCount > 0) {
        starsAndEnd += '*';
        zCount--;
      }
      starsAndEnd += '\r';
      result += starsAndEnd;
      starsAndEnd = '';
    }
  
    return result.slice(0, -1);
  }
  
  hist("tpwaemuqxdmwqbqrjbeosjnejqorxdozsxnrgpgqkeihqwybzyymqeazfkyiucesxwutgszbenzvgxibxrlvmzihcb");
  // "u  3     ***\rw  4     ****\rx  6     ******\rz  6     ******"

  function hist(str) {
    let result = [];
    let u = str.match(/u/g);
    let w = str.match(/w/g);
    let x = str.match(/x/g);
    let z = str.match(/z/g);
  
    result.push(`u  ${u.join("").length}     ${"*".repeat(u.length)}`);
    result.push(`w  ${w.join("").length}     ${"*".repeat(w.length)}`);
    result.push(`x  ${x.join("").length}     ${"*".repeat(x.length)}`);
    result.push(`z  ${z.join("").length}     ${"*".repeat(z.length)}`);
    
    return result.join('\r');
  }
  
  hist("tpwaemuqxdmwqbqrjbeosjnejqorxdozsxnrgpgqkeihqwybzyymqeazfkyiucesxwutgszbenzvgxibxrlvmzihcb");
  // "u  3     ***\rw  4     ****\rx  6     ******\rz  6     ******"