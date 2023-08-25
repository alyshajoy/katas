const squareCode = function (message) {
  let messageArray = message.split("");
  
  for (let i = 0; i < messageArray.length; i++){
    if (messageArray[i] === " "){
      messageArray.splice(i, 1);
    }
  }
  console.log(messageArray);
  
  let howLong = messageArray.length;
  console.log(howLong);
  let sqRoot = Math.ceil(Math.sqrt(howLong));
  console.log(sqRoot);
  let run = 0;
  let result = [];

  for (let i = 0; i < messageArray.length; i++){
    if (run === 0){
      result.push(messageArray[i]);
    }
    if (i % sqRoot === 0){
      result.push(messageArray[i]);
    } 
  }
  run++
  for (let i = 0; i < messageArray.length; i++){
    if
    result.push(messageArray[i]);
  }

};

console.log(squareCode("chill out"));