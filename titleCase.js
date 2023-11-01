const titleCase = function(string) {

  const lowerCase = string.toLowerCase();
  let stringArray = lowerCase.split("");

  for (let i = 0; i < stringArray.length; i++) {
    if (i === 0 || stringArray[i - 1] === " ") {
      stringArray[i] = stringArray[i].toUpperCase();
    }
  }
  return stringArray.join("");

};