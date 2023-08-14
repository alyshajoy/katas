const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let bakeryARecipes = [];
  let bakeryBRecipes = [];
  let workingRecipes = [];
  for (let recipe of recipes){
    for (let i = 0; i < recipe.ingredients.length; i++){
      if (bakeryA.includes(recipe.ingredients[i])){
        bakeryARecipes.push(recipe);
      }
    }
  }
  
  for (let recipe of recipes){
    for (let i = 0; i < recipe.ingredients.length; i++){
      if (bakeryB.includes(recipe.ingredients[i])){
        bakeryBRecipes.push(recipe);
      }
    }
  }

  for (let recipe of bakeryARecipes){
    if (bakeryBRecipes.includes(recipe)){
      workingRecipes.push(recipe);
    }
  }

  return workingRecipes[0].name;
}


let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];


console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));