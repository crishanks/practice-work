function duplicates(str) {
  const replaceAlpha = str.match(/alpha/g);
  return replaceAlpha;

}

//run a match on it, then run a loop that goes through one less time than the length of the match. (will need a words array);

duplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'); // 'alpha beta gamma delta'
