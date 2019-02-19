function divideNamesByLastName(str) {
    const people = str.split(';');
    const separatedNames = people.map((name) => {
      return name.split(':');
    });
  
    let names = {};
    separatedNames.forEach((nameArray) => {
      const lastName = nameArray[1].toUpperCase();
      const firstName = nameArray[0].toUpperCase();
      const nameExists = names[lastName] !== undefined;
      if (!nameExists) {
        names[lastName] = [firstName];
      } else {
        names[lastName].push(firstName);
      }
    });
    return names;
  }
  
  function sortFirstNames(names) {
    const sortedNamesObject = {}
    const sortedLastNames = Object.keys(names).sort().forEach((key) => {
      sortedNamesObject[key] = names[key];
    });
  
    for (let key in sortedNamesObject) {
      sortedNamesObject[key].sort();
    }
    return sortedNamesObject;
  }
  
  function formatResultString(sortedNamesObject) {
    let result = '';
    for (let key in sortedNamesObject) {
      currentFirstNamesArray = sortedNamesObject[key];
      for (let i = 0; i < currentFirstNamesArray.length; i++) {
        currentFirstName = currentFirstNamesArray[i];
        result += `(${key}, ${currentFirstName})`
      }
    }
    return result.slice(0, result.length - 1) + ')';
  }
  
  function meeting(str) {
    const lastNamesObject = divideNamesByLastName(str);
    const sortedFirstNamesObject = sortFirstNames(lastNamesObject);
    const formattedResultString = formatResultString(sortedFirstNamesObject);
    return formattedResultString;
  }
  
  meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn");