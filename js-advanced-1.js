//Javascript, Advanced 1 practice

//1. Pluck
const pluck = (obj, props) => {
  const propsArr = props.split(".");
  let currProp = obj;

  for (props of propsArr) {
    if (!currProp) return null;
    currProp = currProp[props];
  }
  return currProp;
};
// const user = {
//   username: "testuser1",
//   preferences: {
//     sound: {
//       maxValue: 50,
//       value: 30,
//     },
//   },
// };
// const randomValue = Math.random();
// const nullValue = null;
// console.log(pluck(user, "preferences.sound.value")); // 30
// console.log(pluck(user, "unknown.key")); // null
// console.log(pluck(randomValue, "unknown.key")); // null
// console.log(pluck(nullValue, "unknown.key")); // null

// 2. Deep clone
const clone = (obj) => {
  let objCopy = {};

  for (key in obj) {
    if (typeof obj[key] === "object") {
      objCopy[key] = clone(obj[key]);
    }
    if (obj[key]) objCopy[key] = obj[key];
  }
  return objCopy;
};

const user = {
  username: "testuser1",
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
// const clonedUser = clone(user);
// clonedUser.preferences.sound.maxValue = 70;

// console.log(
//   user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue
// ); // false

// 3. "A long time ago"
const offset = (pastDate) => {
  dateNow = new Date("2021-02-23T14:00:00Z");
  pastDate = new Date(pastDate);

  const dateDiff = dateNow - pastDate;
  const daysPassed = dateDiff / (1000 * 60 * 60 * 24);
  const hoursPassed = dateDiff / (1000 * 60 * 60);
  let minutesPassed = dateDiff / (1000 * 60);
  const minutesAfterHours = minutesPassed - Math.floor(hoursPassed) * 60;
  //plural or singular operators
  const daysGrammar = daysPassed >= 2 ? "days" : "day";
  const hoursGrammar = hoursPassed >= 2 ? "hours" : "hour";
  const minutesGrammar = minutesAfterHours >= 2 ? "minutes" : "minute";

  let outputTimeDiff = "";

  if (daysPassed >= 1) {
    outputTimeDiff += Math.floor(daysPassed) + " " + daysGrammar;
  } else {
    //if less than 1 day
    if (hoursPassed % 1 === 0 && hoursPassed >= 1) {
      //if full hour
      outputTimeDiff += `${Math.floor(hoursPassed)} ${hoursGrammar}`;
    } else {
      //not full hour, hours and minutes
      if (hoursPassed > 1) {
        const hoursPassedFloored = Math.floor(hoursPassed);
        outputTimeDiff += `${hoursPassedFloored} ${hoursGrammar} ${Math.floor(
          minutesAfterHours
        )} ${minutesGrammar}`;
      } else {
        outputTimeDiff += `${minutesPassed} ${minutesGrammar}`;
      }
    }
  }
  return `${outputTimeDiff} ago`;
};

const moment2 = (date, format) => {
  const dateSplitted = date.split(/[/: ]/);
  const formatSplitted = format.split(/[/: ]/);

  const day = dateSplitted[formatSplitted.indexOf("DD")];
  const month = dateSplitted[formatSplitted.indexOf("MM")];
  const year = dateSplitted[formatSplitted.indexOf("YYYY")];
  const hour = dateSplitted[formatSplitted.indexOf("hh")];
  const minute = dateSplitted[formatSplitted.indexOf("mm")];
  const second = dateSplitted[formatSplitted.indexOf("ss")];

  return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
};

// // E.g. Today is 23.02.2021, 14:00:00
// console.log(offset(moment2("23/02/2021 13:30:00", "DD/MM/YYYY hh:mm:ss")));
// // 30 minutes ago

// console.log(offset(moment2("23/02/2021 13:00:00", "DD/MM/YYYY hh:mm:ss")));
// // 1 hour ago

// console.log(offset(moment2("23/02/2021 11:30:00", "DD/MM/YYYY hh:mm:ss")));
// // 2 hours 30 minutes ago

// console.log(offset(moment2("22/02/2021 14:00:00", "DD/MM/YYYY hh:mm:ss")));
// // 1 day ago

// console.log(offset(moment2("23/02/2020 10:00:00", "DD/MM/YYYY hh:mm:ss")));
// // 366 days ago

// 4. Random dates
const moment = (date, format) => {
  const dateSplitted = date.split(/[/]/);
  const formatSplitted = format.split(/[/]/);
  const day = dateSplitted[formatSplitted.indexOf("DD")];
  const month = dateSplitted[formatSplitted.indexOf("MM")];
  const year = dateSplitted[formatSplitted.indexOf("YYYY")];

  return `${year}-${month}-${day}`;
};

class RandomDate {
  constructor(date1, date2) {
    this.minDate = new Date(date1).getTime();
    this.maxDate = new Date(date2).getTime();
    this.randomDate = new Date(
      Math.random() * (this.maxDate - this.minDate) + this.minDate
    );
  }

  format = (format) => {
    const year = this.randomDate.getFullYear();
    let month = this.randomDate.getMonth() + 1;
    let day = this.randomDate.getDate();
    month = ("0" + month).slice(-2);
    day = ("0" + day).slice(-2);
    format = format.split("/");
    const dayIndex = format.indexOf("DD");
    const monthIndex = format.indexOf("MM");
    const yearIndex = format.indexOf("YY");

    const outputArr = new Array(3);
    outputArr[dayIndex] = day;
    outputArr[monthIndex] = month;
    outputArr[yearIndex] = `${year}`.slice(-2);

    return outputArr.join("/");
  };
}

const date1 = moment("23/01/2021", "DD/MM/YYYY");
const date2 = moment("23/02/2021", "DD/MM/YYYY");
const randomDate = new RandomDate(date1, date2);
// console.log(randomDate.format("DD/MM/YY"));
// 20/02/2021

// 5. Merged Objects. => https://www.codewars.com/kata/merged-objects
