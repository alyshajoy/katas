const makeCase = function(string, caseType) {

  function switchStatement (string, caseType){
    switch (caseType) {
      case "camel":
        let capitals = [];
        let toArray = string.split("");

        for (let i = 0; i <toArray.length; i++){
          if (i === 0 || toArray[i-1] != " "){
            capitals.push(toArray[i]);
          } else if (toArray[i-1] === " "){
            capitals.push(toArray[i].toUpperCase())
          }
        }
        
        for (let i = 0; i < capitals.length; i++){
          if (capitals[i] === " "){
            capitals.splice(i, 1);
          }
        }
        return capitals.join("");
        break;
      
      case "pascal":
        let capitals2 = [];
        let toArray2 = string.split("");
        for (let i = 0; i <toArray2.length; i++){
          if (i === 0 || toArray2[i-1] === " "){
            capitals2.push(toArray2[i].toUpperCase())
          } else if (toArray2[i-1] != " "){
            capitals2.push(toArray2[i]);
          }
        }
        for (let i = 0; i < capitals2.length; i++){
          if (capitals2[i] === " "){
            capitals2.splice(i, 1);
          }
        }
        return capitals2.join("");
        break;
      
      case "snake":
        let snakeArray = string.split("");
        for (let i = 0; i < snakeArray.length; i++) {
          if (snakeArray[i] === " ") {
            snakeArray.splice(i, 1, "_");
          }
        }
        return snakeArray.join("");
        break;
      
      case "kebab":
        let kebabArray = string.split("");
        for (let i = 0; i < kebabArray.length; i++) {
          if (kebabArray[i] === " ") {
            kebabArray.splice(i, 1, "-");
          }
        }
        return kebabArray.join("");
        break;

      case "title":
        let titleCapitals = [];
        let titleArray = string.split("");
        for (let i = 0; i <titleArray.length; i++){
          if (i === 0 || titleArray[i-1] === " "){
            titleCapitals.push(titleArray[i].toUpperCase())
          } else if (titleArray[i-1] != " "){
            titleCapitals.push(titleArray[i]);
          }
        }

        return titleCapitals.join("");
        break;

      case "vowel":
        let vowelCapitals = [];
        let capitalsArray = string.split("");
        for (let i = 0; i <capitalsArray.length; i++){
          if (capitalsArray[i] === "a" || capitalsArray[i] === "e" || capitalsArray[i] === "i" || capitalsArray[i] === "o" || capitalsArray[i] === "u"){
            vowelCapitals.push(capitalsArray[i].toUpperCase())
          } else {
            vowelCapitals.push(capitalsArray[i]);
          }
        }
    
        return vowelCapitals.join("");
        break;

      case "consonant":
        let consonantCapitals = [];
        let consonantArray = string.split("");
        for (let i = 0; i <consonantArray.length; i++){
          if (!(consonantArray[i] === "a" || consonantArray[i] === "e" || consonantArray[i] === "i" || consonantArray[i] === "o" || consonantArray[i] === "u")){
            consonantCapitals.push(consonantArray[i].toUpperCase())
          } else {
            consonantCapitals.push(consonantArray[i]);
          }
        }
    
        return consonantCapitals.join("");
        break;

      case "upper":
        let upperCase = string.toUpperCase();
        return upperCase;
        break;

      default:
        return string;
    }

  }

  if (Array.isArray(caseType)){
    let result = string;
    for (let i of caseType){
      result = switchStatement(result, i);
    }
    return result;
  } else {
    return switchStatement(string, caseType);
  }

}
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING