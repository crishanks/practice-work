function hasIngredients(recipe, ingredients) {
    for (let recipeKey in recipe) {
      if (!ingredients[recipeKey]) {
        return false;
      }
    }
    return true;
  }
  
  function calculateIngredientsAmounts(recipe, ingredients) {
    const ingredientsAmounts = {};
    if (hasIngredients) {
      for (let recipeKey in recipe) {
        ingredientsAmounts[recipeKey] = 0;
        while (ingredients[recipeKey] >= recipe[recipeKey]) {
          ingredientsAmounts[recipeKey] += 1;
          ingredients[recipeKey] -= recipe[recipeKey];
        }
      }
    }
    return ingredientsAmounts;
  }
  
  function calculateAmountPossible(recipe, ingredients) {
    const amounts = calculateIngredientsAmounts(recipe, ingredients);
    const ingredientsAmountsArray = [];
    for (key in amounts) {
      ingredientsAmountsArray.push(amounts[key]);
    }
    const sortedIngredientsAmountsArray = ingredientsAmountsArray.sort((a,b) => {
      return a - b;
    });
    return sortedIngredientsAmountsArray[0];
  }
  
  calculateAmountPossible({"milk":29,"sugar":68,"chocolate":25}, {"crumbles":1500,"nuts":1900,"oil":8000,"milk":2300,"cream":3500,"flour":1200,"butter":6500,"apples":7300,"chocolate":6000,"pears":9900,"sugar":5900,"eggs":9500,"cocoa":6700}); // 79