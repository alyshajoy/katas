const blocksAway = function (directions) {
  
  let compass = 0;
  let x = 0;
  let y = 0;
  let answer = {
    east: 0,
    north: 0
  }
  
  for (let i = 0; i < 1; i++) {
    if (directions[i] === "right") {
      compass += 1;
      x += directions[i + 1];
    } else if (directions[i] === "left"){
      compass += 2;
      y += directions[i + 1];
    }
  }

  for (let i = 2; i < directions.length; i++) {
    if (directions[i] === "right"){
      if (compass === 1) {
        compass += 3;
        y -= directions[i + 1];
      } else if (compass === 4) {
        compass -= 1;
        x -= directions[i + 1];
      } else if (compass === 2){
        compass -= 1;
        x += directions[i + 1];
      } else if (compass === 3) {
        compass -= 1;
        y += directions[i + 1];
      }

    } else if (directions[i] === "left"){
      if (compass === 1) {
        compass += 1;
        y += directions[i + 1];
      } else if (compass === 4) {
        compass -= 3;
        x += directions[i + 1];
      } else if (compass === 2){
        compass += 1;
        x -= directions[i + 1];
      } else if (compass === 3) {
        compass += 1;
        y -= directions[i + 1];
      }
    }
  }

  answer.east = x;
  answer.north = y;

  return answer;

};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// {east: 1, north: 3}