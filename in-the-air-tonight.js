const checkAir = function (samples, threshold) {
  let dirty = [];
  for (let i of samples){
    if (i === "dirty"){
      dirty.push(i);
    }
  }
  console.log(dirty);
  if (dirty.length / samples.length < threshold){
    return "clean";
  } else {
    return "polluted";
  }

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
