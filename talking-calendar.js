const talkingCalendar = function (date) {
  dateArray = date.split("");
  day = [];
  month = [];
  year = [];

  for (let i = 0; i < dateArray.length; i++) {
    if (dateArray[i-1] === "/") {
      day.push(dateArray[i]);
      day.push(dateArray[i + 1]);
    }
  }
 
  for (let i = 0; i < 2; i++){
    month.push(day.shift());
  }
  if (month[0] === "0"){
    month.splice(0, 1);
  } else if (day[0] === "0"){
    day.splice(0, 1);
  }

  for (let i = 0; i < 4; i++){
    year.push(dateArray.shift());
  }

  let monthString = month.join("");
  let dayString = day.join("");
  let yearString = year.join("");
  let monthWord;

  switch (monthString){
    case "1":
      monthWord = "January";
      break;
    case "2":
      monthWord = "February";
      break;
    case "3":
      monthWord = "March";
      break;
    case "4":
      monthWord = "April";
      break;
    case "5":
      monthWord = "May";
      break;
    case "6":
      monthWord = "June";
      break;
    case "7":
      monthWord = "July";
      break;
    case "8":
      monthWord = "August";
      break;
    case "9":
      monthWord = "September";
      break;
    case "10":
      monthWord = "October";
      break;
    case "11":
      monthWord = "November";
      break;
    case "12":
      monthWord = "December";
  }

  let attach;

  if (dayString === "1"){
    attach = "st";
  } else if (dayString === "2"){
    attach = "nd";
  } else if (dayString === "3"){
    attach = "rd";
  } else {
    attach = "th";
  }

  return monthWord + " " + dayString + attach + ", " + yearString;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));