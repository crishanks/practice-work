function validParenthesis(str) {
    str.split('').forEach((item) => {
      str = str.replace('()', '');
    });
    if (str !== '') {
      return false;
    }
    return true;
  }
  
  validParenthesis("(())((()())())")//true;