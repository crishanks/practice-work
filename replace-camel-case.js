function replaceCamelCase(s) {
  return s.replace(/([A-Z])/g, ' $1');
}

replaceCamelCase('thisIsCamelCase'); // 'this Is Camel Case';
