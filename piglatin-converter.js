function pigIt(str){
    wordsArray = str.split(' ');
    const piglatinWordsArray = wordsArray.map((word) => {
      const firstLetter = word.slice(0, 1);
      const restOfWord = word.slice(1);
      if (word.length === 1 && word.charCodeAt() < 65) {
        return word;
      } else {
        return restOfWord + firstLetter + 'ay';
      }
    });
    return piglatinWordsArray.join(' ');
  }
  
  pigIt('Pig latin a is cool !'); //'igPay atinlay aay siay oolcay !'