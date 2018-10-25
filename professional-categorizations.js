function proCategorization(pros, preferences) {
  const theObject = createObject(pros, preferences);
  const result = addPros(theObject);
  return result;
}

function createObject(pros, preferences) {
  let map = {};
  let result = [];
  for (let i = 0; i < preferences.length; i++) {
    const currentArray = preferences[i];
    for (let j = 0; j < currentArray.length; j++) {
      const currentItem = currentArray[j];
      const itemExists = map[currentItem] !== undefined;
      if (!itemExists) {
        map[currentItem] = [];
      }
      map[currentItem].push(pros[i]);
    }
  }
  return map;
}

function addPros(map) {
  let result = [];
  const jobs = Object.keys(map);
  jobs.forEach((job) => {
    const jobAndPeople = [[job], map[job]];
    result.push(jobAndPeople);
  });
  return result;
}

proCategorization(["Jack",  "Leon",  "Maria"],  [

 ["Computer repair","Handyman","House cleaning"],
 ["Computer lessons","Computer repair","Data recovery service"],
 ["Computer lessons","House cleaning"]

 ]);
