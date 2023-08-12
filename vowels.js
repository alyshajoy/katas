const numberOfVowels = function(string) {

  let vowels = [];
  let apart = string.split("");
  console.log("broken:", apart);
  for (let i of apart){
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
      vowels.push(i);
    }
  }  
  console.log(vowels);
  return vowels.length;
  
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("eeeeeeeeeeiiiioua"));
