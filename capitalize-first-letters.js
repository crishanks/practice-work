function capitalizeFirstLetters(str) {
    const result = [];
    const arrayOfWords = str.split(' ');
    arrayOfWords.map(function(word) {
      result.push(word[0].toUpperCase() + word.slice(1));
    });
    return result.join(' ');
  }
  
  capitalizeFirstLetters('the dog ran');