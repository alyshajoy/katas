const conditionalSum = function(array, condition) {
  let evens = []
  let odds = []
  array.sort((a, b) => a - b);
  for (let i of array){
    if (i % 2 === 0){
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  if (condition === "even" && evens.length > 0){
    return evens[evens.length - 1] + evens[evens.length - 2];
  } else if (condition === "odd" && odds.length > 0) {
    return odds[odds.length - 1] + odds[odds.length - 2];
  } else {
    return 0;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));