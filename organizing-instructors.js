const organizeInstructors = function (instructors) {
  let course = new Object();

  for (let eachInstructor of instructors) {
    if (!course.hasOwnProperty(eachInstructor.course)) {
      course[eachInstructor.course] = [eachInstructor.name];
    } else {
      course[eachInstructor.course].push(eachInstructor.name);
    }
  }

  return course;

};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);

console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);