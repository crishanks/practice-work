((name1, name2) => {
  let name1Count = 0;
  let name2Count = 0;
let i = 1;
while (i <= 3) {
   const findNum = (Math.random() * 2);
    if (findNum < 0.5) {
        name1Count += 1;
    i++;
    } else {
          name2Count += 1;
    i++;
    }
  }
if (name1Count > name2Count) {
  return name1;
  }else {
  return name2;
  }
})('john', 'steve');