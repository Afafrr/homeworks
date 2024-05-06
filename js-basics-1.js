// 1. Opposite number => http://www.codewars.com/kata/opposite-number
const findOpposite = (num) => {
  return -num;
};

// console.log(findOpposite(1));
// console.log(findOpposite(14));
// console.log(findOpposite(-34));

// 2. Basic Mathematical Operations => http://www.codewars.com/kata/basic-mathematical-operations
const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
};

// basicOp("+", 4, 7);
// basicOp("-", 15, 18);
// basicOp("*", 5, 5);
// basicOp("/", 49, 7);

// 3. Printing Array elements with Comma delimiters => http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
const separateWithCommas = (array) => {
  return array.join(",");
};

// console.log(separateWithCommas(["h", "o", "l", "a"]));
// console.log(separateWithCommas(["h", true, { key: "val" }, [1, 2], ["a"]]));

// 4. Transportation on vacation => http://www.codewars.com/kata/transportation-on-vacation
const totalAmount = (days) => {
  const dayCostUSD = 40;
  let result = d * dayCostUSD;

  if (d >= 3 && d < 7) {
    result -= 20;
  }
  if (d >= 7) {
    result -= 50;
  }
  return result;
};

// console.log(totalAmount(2));
// console.log(totalAmount(5));
// console.log(totalAmount(7));
// console.log(totalAmount(8));

// 5. Calculating with Functions => http://www.codewars.com/kata/calculating-with-functions
function zero(fun) {
  return fun ? fun(0) : 0;
}
function one(fun) {
  return fun ? fun(1) : 1;
}
function two(fun) {
  return fun ? fun(2) : 2;
}
function three(fun) {
  return fun ? fun(3) : 3;
}
function four(fun) {
  return fun ? fun(4) : 4;
}
function five(fun) {
  return fun ? fun(5) : 5;
}
function six(fun) {
  return fun ? fun(6) : 6;
}
function seven(fun) {
  return fun ? fun(7) : 7;
}
function eight(fun) {
  return fun ? fun(8) : 8;
}
function nine(fun) {
  return fun ? fun(9) : 9;
}

function plus(b) {
  return (a) => a + b;
}
function minus(b) {
  return (a) => a - b;
}
function times(b) {
  return (a) => a * b;
}

function dividedBy(b) {
  return (a) => Math.floor(a / b);
}
// console.log(seven(times(five())));
// console.log(eight(minus(three())));
// console.log(six(dividedBy(two())));

// 6. Get the Middle Character => http://www.codewars.com/kata/get-the-middle-character
function getMiddle(s) {
  halfOfS = Math.ceil(s.length / 2);

  if (s.length % 2 === 0) {
    return s[halfOfS - 1] + s[halfOfS];
  } else {
    return s[halfOfS - 1];
  }
}
// console.log(getMiddle("test"));
// console.log(getMiddle("middle"));

// 7. Partition On => http://www.codewars.com/kata/partition-on
function partitionOn(pred, items) {
  let trueArr = [];
  let falseArr = [];

  for (item of items) {
    if (pred(item)) {
      trueArr.push(item);
    } else {
      falseArr.push(item);
    }
  }
  items.splice(0);
  items.push(...falseArr, ...trueArr);

  return items.indexOf(trueArr[0]);
}
// const items = [1, 2, 3, 4, 5, 6];
// function isEven(n) {
//   return n % 2 == 0;
// }
// const i = partitionOn(isEven, items);
// console.log(items, i);

// 8. Find the odd int => https://www.codewars.com/kata/find-the-odd-int/
function findOdd(A) {
  let map = new Map();

  A.forEach((item) => {
    if (map.has(item)) {
      let value = map.get(item);
      map.set(item, value + 1);
    } else {
      map.set(item, 1);
    }
  });

  for (let [key, value] of map) {
    if (value % 2 !== 0) {
      return key;
    }
  }
}
// console.log(findOdd([0, 1, 0, 1, 0]));
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// 9. Find The Parity Outlier => https://www.codewars.com/kata/find-the-parity-outlier
function findOutlier(integers) {
  let odd = 0;
  let even = 0;
  let lastOdd = 0;
  let lastEven = 0;

  for (int of integers) {
    if (int % 2 === 0) {
      even += 1;
      lastEven = int;
    } else {
      odd += 1;
      lastOdd = int;
    }
    if (odd > 1 && even === 1) {
      return lastEven;
    }
    if (odd === 1 && even > 1) {
      return lastOdd;
    }
  }
}
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

// 10. zipWith => https://www.codewars.com/kata/zipwith
function zipWith(fn, a0, a1) {
  arr = [];
  const minLen = Math.min(a0.length, a1.length);

  for (let i = 0; i < minLen; i++) {
    let result = fn(a0[i], a1[i]);
    arr.push(result);
  }
  return arr;
}

// console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
// console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]));

// 11. Filter the number => https://www.codewars.com/kata/filter-the-number
const filterString = function (value) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  value = Array.from(value);

  let numArr = value.filter((x) => numbers.includes(Number(x)));
  return Number(numArr.join("").trim());
};

filterString(`For the input "123"`);

// 12. N-th Fibonacci => https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  let first = 0;
  let second = 1;
  let temp = 0;

  for (let i = 0; i < n - 1; i++) {
    temp = second;
    second = first + second;
    first = temp;
  }

  return first;
}
// console.log(nthFibo(3));
// console.log(nthFibo(4));
// console.log(nthFibo(5));

// 13. Cat and Mouse - 2D Version => https://www.codewars.com/kata/cat-and-mouse-2d-version/
// Its not passing all the tests, but I think logic is fine. When i insert test data, which appears in codewars the behaviour is correct. :/
function catMouse(map, moves) {
  const horizontalLength = map.indexOf("\n");
  map = map.replace(/\s/g, "");

  const catIndex = map.indexOf("C");
  const mouseIndex = map.indexOf("m");
  const indexDiff = mouseIndex - catIndex;
  const verticalMovesNeeded = Math.floor(indexDiff / horizontalLength);
  const horizontalMovesNeeded =
    indexDiff - verticalMovesNeeded * horizontalLength;

  console.log({
    horizontalLength,
    verticalMovesNeeded,
    horizontalMovesNeeded,
  });

  if (mouseIndex === -1 || catIndex === -1) {
    return "boring without two animals";
  }
  if (verticalMovesNeeded + horizontalMovesNeeded <= moves) {
    return "Caught!";
  } else {
    return "Escaped!";
  }
}
// console.log(
//   catMouse(
//     `....
//     ....
//     ....
//     ....
//     ....
//     ..C.
//     ....
//     m...
//     ....
//     ....
//     ....`,
//     6
//   )
// );
// console.log(
//   catMouse(
//     `............
//     ..C.........
//     ............
//     ............
//     .........m..
//     ............`,
//     10
//   )
// );

//14. Duplicate Encoder => https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  let map = new Map();
  let outputString = "";
  word = word.toLowerCase();
  for (letter of word) {
    if (map.has(letter)) {
      let value = map.get(letter);
      map.set(letter, ++value);
    } else {
      map.set(letter, 1);
    }
  }
  for (letter of word) {
    if (map.get(letter) > 1) {
      outputString += ")";
    } else {
      outputString += "(";
    }
  }
  return outputString;
}
// console.log(duplicateEncode("Success"));
// console.log(duplicateEncode("Tvtv0r3T5R4VrT0"));

// 15. Additive Numbers => https://www.codewars.com/kata/5693239fb761dc8670000001
// It passes the tests, but I get timec out error. I know it looks nasty, but i have fought with this task for a long time and I'm happy that it works in some way :)
let firstNumEndIndex = 1;
let secondNumEndIndex = 2;
function findAdditiveNumbers(num) {
  let checkedNums = [];
  let outputNums = [];
  //checks first 2 numbers that gives next x-digit sum
  const findPattern = (firstNumEndIndex, secondNumEndIndex) => {
    let firstNum = Number(num.slice(0, firstNumEndIndex));
    let secondNum = Number(num.slice(firstNumEndIndex, secondNumEndIndex));
    let halfOfNums = Math.floor(num.length / 2);
    let sum = firstNum + secondNum;
    //one number can be only half long of num
    //sum should fit in array after 2nd number
    if (
      String(firstNum).length >= halfOfNums + 1 ||
      String(secondNum).length >= halfOfNums + 1 ||
      String(sum).length + secondNumEndIndex > num.length ||
      outputNums.join("").length === num.lengt ||
      secondNumEndIndex === num.lengt - 1
    ) {
      return;
    }
    let predictedSum = Number(
      num.slice(secondNumEndIndex, secondNumEndIndex + String(sum).length)
    );
    checkedNums.push([firstNum, secondNum]);

    //predictedSum === indexLen after secondNumEndIndex
    //push only once to array
    if (
      sum === predictedSum &&
      !outputNums.includes(firstNum || secondNum || predictedSum)
    ) {
      outputNums.push(firstNum, secondNum, predictedSum);
      return outputNums;
    }
    findPattern(firstNumEndIndex + 1, secondNumEndIndex);
    findPattern(firstNumEndIndex, secondNumEndIndex + 1);

    return outputNums;
  };
  //loops through string on given pattern, if pattern fails run code again with bigger base number
  const checkPattern = (checkedNums) => {
    const lastIndexOfSum = checkedNums.join("").length - 1;
    let newSum =
      checkedNums[checkedNums.length - 1] + checkedNums[checkedNums.length - 2];
    let newSumLen = String(newSum).length;
    let newSumPrediction = num.slice(
      lastIndexOfSum + 1,
      lastIndexOfSum + 1 + newSumLen
    );

    if (lastIndexOfSum >= num.length - 1 && num.lengt < 5) return;
    if (newSum === Number(newSumPrediction)) {
      outputNums.push(newSum);
      checkPattern(outputNums);
    } else {
      return true;
    }
    if (outputNums.join("").length === num.length) {
      return;
    }
    return outputNums;
  };

  findPattern(firstNumEndIndex, secondNumEndIndex);

  let checkPatternOutput = checkPattern(outputNums);
  if (checkPatternOutput && secondNumEndIndex < Math.floor(num.length / 2)) {
    ++firstNumEndIndex;
    ++secondNumEndIndex;
    return findAdditiveNumbers(num);
  }
  if (outputNums.join("").length === num.length) {
    //parse nums into strings
    for (const [index, value] of outputNums.entries()) {
      outputNums[index] = String(value);
    }
    firstNumEndIndex = 1;
    secondNumEndIndex = 2;
    return outputNums;
  } else {
    firstNumEndIndex = 1;
    secondNumEndIndex = 2;
    return [];
  }
}
// findAdditiveNumbers('112358') === ['1','1','2','3','5','8']
// findAdditiveNumbers('199100199') === ['1','99','100','199']
// console.log(findAdditiveNumbers("112358"));
// console.log(findAdditiveNumbers("199100199299"));
console.log(findAdditiveNumbers("7916972717643273704501372383"));
// console.log(findAdditiveNumbers("791697271764327370"));
// console.log(findAdditiveNumbers("198001519815"));
console.log(findAdditiveNumbers("12345"));
console.log(findAdditiveNumbers("101"));
console.log(findAdditiveNumbers("10020120"));

// 16.Build Tower => https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  let output = [];
  let floorStr;

  for (let i = 1; i <= nFloors; i++) {
    let starsNum = 2 * i - 1;

    floorStr =
      " ".repeat(nFloors - i) + "*".repeat(starsNum) + " ".repeat(nFloors - i);
    output.push(floorStr);
  }
  return output;
}
// console.log(towerBuilder(10));

// 17. Mexican Wave => https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  let outputArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;

    let beforeLetter = str.slice(0, i);
    let letter = str.slice(i, i + 1);
    let afterLetter = str.slice(i + 1);
    outputArr.push(beforeLetter + letter.toUpperCase() + afterLetter);
  }
  return outputArr;
}
// console.log(wave("two words"));

// 18. String Breakers (retired) => https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, string) {
  const mergedStr = string.replace(/\s+/g, "");
  let output = "";

  for (let i = 0; i < mergedStr.length; i += n) {
    const slicedWord = mergedStr.slice(i, i + n);
    output += slicedWord + "\n";
  }
  return output.slice(0, -1);
}
// console.log(stringBreakers(5, "This is an example string"));

// 19. Extract the domain name from a URL => https://www.codewars.com/kata/514a024011ea4fb54200004b
function domainName(url) {
  url = url.replace("http://", "").replace("https://", "").replace("www.", "");
  let output = url.split(".")[0];
  return output;
}
// console.log(domainName("http://github.com/carbonfive/raygun"));
// console.log(domainName("http://www.zombie-bites.com"));
