const urlDecode = function (string) {
  stringToArray = string.split("");
  
  let indexOfEquals = stringToArray.indexOf("=");

  console.log("index:", indexOfEquals);
  let firstWord = [];
  let secondWord = [];
  
  for (let i = 0; i < indexOfEquals; i++) {
    firstWord.push(stringToArray[i]);
  }
  console.log(firstWord);

  
};

console.log(urlDecode("duck=rubber"));
// console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));