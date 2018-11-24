function comp(array1, array2){
    let powerArray = [];
    for (let i = 0; i < array1.length; i++) {
      powerArray.push(array1[i] * array1[i]);
    }
    if (array1 === undefined || array2 === undefined || powerArray.length !== array2.length) {
      return false;
    }
    const sortedPowerArray = powerArray.sort().join('');
    if (sortedPowerArray === array2.sort().join('')) {
      return true;
    }
    return false;
  }
  
  //comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]);
  //true;