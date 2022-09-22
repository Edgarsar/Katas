// Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD,
//  and returns a new human readable date that looks like December 2nd, 2017.

const talkingCalendar = function (date) {
  const dateObject = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
  const splitDate = date.split("/");
  if (+splitDate[2] === 1 || +splitDate[2] === 21 || +splitDate[2] === 31) {
    splitDate[2] += "st";
  }
  else if (+splitDate[2] === 2 || +splitDate[2] === 22) {
    splitDate[2] = splitDate[2][1] + "nd";

  } else if (+splitDate[2] === 3 || +splitDate[2] === 23) {
    splitDate[2] = splitDate[2][1] + "rd";
  }
  else {
    splitDate[2] += "th";
  }
  return dateObject[splitDate[1]] + " " + splitDate[2] + " " + splitDate[0];
};
console.log(talkingCalendar("2019/01/31"));
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


