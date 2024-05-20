//1. Error Throwing - Error Handling #2 => https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError("Message is null!");
  }
  if (typeof msg !== "string") {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );
  }
  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }
  const htmlTagRegex = new RegExp("<([A-Za-z]*)>", "g");
  if (htmlTagRegex.test(msg)) {
    return false;
  } else {
    return true;
  }
}

// console.log(validateMessage("<input>"));
// false,'Should return false because message contains an HTML tag');
// console.log(validateMessage("Hiya!"));
// ,true,'Should return true because this is a valid message');

//2. Jokes you've been 'awaiting' for ... promise => https://www.codewars.com/kata/5a353a478f27f244a1000076/javascript
// API NOT WORKING API NOT WORKING
function sayJoke(apiUrl) {
  fetch(apiUrl)
    .then((res) => {
      console.log(res.json());
    })
    .catch((err) => console.log(err));
}
// sayJoke("http://great.jokes/christmas");

// 3. setTimeout/setInterval
function timer() {
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    console.log(`Elapsed time: ${counter} sec`);

    if (counter === 5) clearInterval(interval);
  }, 1000);
}
// timer();

// 5. Fetch API/XMLHttpRequest
async function getRandomUser() {
  // const response = 
}
