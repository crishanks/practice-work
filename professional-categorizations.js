function proCategorization(pros, preferences) {
  let jobAndProArray = [];
  let temp = [];

  for (let i = 0; i < preferences.length; i++) {
    const currentPreferenceArray = preferences[i];
    for (let j = 0; j < currentPreferenceArray.length; j++) {
      const currentPreference = currentPreferenceArray[j];
      temp.push(currentPreference);
      temp.push(pros[i]);
      jobAndProArray.push(temp);
      temp = [];
    }
  }
  return jobAndProArray;
}

function separateJobs(pros, jobAndProArray) {
  let result = [];
  let temp = [];

  for (let i = 0; i < jobAndProArray.length; i++) {
    const currentJobAndProArray = jobAndProArray[i];
    for (let j = 0; j < currentJobAndProArray.length; j++) {
      const currentItem = currentJobAndProArray[j];
      const previousItem = currentJobAndProArray[j - 1];
      if (currentItem === pros[i]) {
        temp.push(previousItem)
      }
    }
    result.push(temp);
    temp = [];
  }
  console.log(result);
}

proCategorization(["Jack",  "Leon",  "Maria"],[

 ["Computer repair","Handyman","House cleaning"],
 ["Computer lessons","Computer repair","Data recovery service"],
 ["Computer lessons","House cleaning"]

 ]);

 //[

//  [["Computer lessons"],["Leon","Maria"]],
//  [["Computer repair"],["Jack","Leon"]],
//  [["Data recovery service"],["Leon"]],
//  [["Handyman"],["Jack"]],
//  [["House cleaning"],["Jack","Maria"]]

//  ])

//loop through the array of preferences. push it into the result array. then push the names of the people at that same index into the result array.
