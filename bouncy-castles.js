const PI = 3.14159;

const sphereVolume = function (radius) {
  let volume = (4/3) * PI * radius * radius * radius;
  return volume;
};

console.log("sphere:", 4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let volume = PI * radius * radius * (height / 3);
  return volume;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let volume = width * depth * height;
  return volume;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (shapes) {
  let total = 0;
  for (let i of shapes){
    if (i.type === "sphere"){
      total += sphereVolume(i.radius);
    } else if (i.type === "cone"){
      total += coneVolume(i.radius, i.height);
    } else if (i.type === "prism"){
      total += prismVolume(i.height, i.width, i.depth);
    }
  }
  return total; 
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);