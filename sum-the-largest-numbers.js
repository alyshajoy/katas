const sumLargestNumbers = function(array) {
  array.sort();
  array.sort((a, b) => a - b);
  let total = array[array.length - 1] + array[array.length - 2];
  return total;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));