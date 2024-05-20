//1. Error Throwing - Error Handling #2 => https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript

function validateMessage(msg) {
  if (typeof msg !== "string") {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );
  }
  //innerHTML
}

console.log(validateMessage("<input>"));
// false,'Should return false because message contains an HTML tag');
console.log(validateMessage("Hiya!"));
// ,true,'Should return true because this is a valid message');
