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
  return result.sort((a, b) => {
    const job1 = a[0][0];
    const job2 = b[0][0];
    const sortedJobs = [job1, job2].sort();
    if (sortedJobs[0] === job1) {
      return -1;
    } else {
      return 1;
    }
  });
}
