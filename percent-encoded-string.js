const urlEncode = function(string) {
  let split = string.split("");
  console.log("first split:", split);
    for (let i of split){
      if (i === ' '){
        split.splice(split.indexOf(i), 1, "%20");
      }
    }
  console.log("added 20:", split);
  return split.join("");
 
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));