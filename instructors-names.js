const instructorWithLongestName = function (instructors) {
  instructors.sort((a, b) => a.name.length - b.name.length);
  console.log(instructors);
  return instructors[instructors.length - 1];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "jfkdlafjkslfhka", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);