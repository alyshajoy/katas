const calculateChange = function (total, cash) {
  let difference = (cash - total).toString();
  let cents = difference.slice(-2);
  let dollars = difference.slice(0, -2)
  let centsNum = parseInt(cents);
  let dollarsNum = parseInt(dollars);
  let twenties = 0;
  let tens = 0;
  let fives = 0;
  let twoDollars = 0;
  let oneDollar = 0;
  let quarters = 0;
  let dimes = 0;
  let nickles = 0;
  let pennies = 0;
  
  if (dollarsNum >= 20){
    twenties = Math.floor(dollarsNum / 20);
    dollarsNum = dollarsNum - (20 * twenties);
  }
  if (dollarsNum >= 10){
    tens = Math.floor(dollarsNum / 10);
    dollarsNum = dollarsNum - (10 * tens);
  }
  if (dollarsNum >= 5){
    fives = Math.floor(dollarsNum / 5);
    dollarsNum = dollarsNum - (5 * fives);
  }
  if (dollarsNum >= 2){
    twoDollars = Math.floor(dollarsNum / 2);
    dollarsNum = dollarsNum - (2 * twoDollars);
  }
  if (dollarsNum >= 1){
    oneDollar = Math.floor(dollarsNum / 1);
    dollarsNum = dollarsNum - (1 * oneDollar);
  }

  if (centsNum >= 25){
    quarters = Math.floor(centsNum / 25);
    centsNum = centsNum - (25 * quarters);
  }
  if (centsNum >= 10){
    dimes = Math.floor(centsNum / 10);
    centsNum = centsNum - (10 * dimes);
  }
  if (centsNum >= 5){
    nickles = Math.floor(centsNum / 5);
    centsNum = centsNum - (5 * nickles);
  }
  if (centsNum >= 1){
    pennies = Math.floor(centsNum / 1);
    centsNum = centsNum - (1 * pennies);
  }
  
  let moneyList = {
    "twenties": twenties,
    "tens": tens,
    "fives": fives,
    "toonies": twoDollars,
    "loonies": oneDollar,
    "quarters": quarters,
    "dimes": dimes,
    "nickles": nickles,
    "pennies": pennies
  }
  for (let key in moneyList) {
    if (moneyList[key] === 0) {
      delete moneyList[key];
    }
  }

  return moneyList;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));