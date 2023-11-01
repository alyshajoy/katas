const multiplicationTable = function (maxValue) {
  
  let chart = [];

  for (let i = 1; i <= maxValue; i++) {
    if (i === 1) {
      chart.push([]);
      chart[0].push(i);
    } else {
      chart[0].push(i);
    }
  }
  
  for (let i = 2; i <= maxValue; i++) {
    if (chart.length < i) {
      chart.push([]);
    }
    let multiples = 0;
    for (let x = i; x <= maxValue + i - 1; x++) {
      multiples += i;
      chart[i - 1].push(multiples);
      console.log(chart);
    }
  }

};

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
console.log(multiplicationTable(12));