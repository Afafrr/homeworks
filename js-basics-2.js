// Codewars tasks
// 1. Sum of positive => https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  let sum = 0;
  arr.map((num) => {
    if (num > 0) {
      sum += num;
    }
  });
  return sum;
}
// console.log(positiveSum([1, -2, 3, 4, 5]));

// 2. Simple consecutive pairs => https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i += 2) {
    let firstNum = arr[i];
    let secondNum = arr[i + 1];
    if (firstNum + 1 === secondNum || firstNum - 1 === secondNum) {
      count += 1;
    }
  }
  return count;
}
// console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));
// //2
// console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]));
// //0
// console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]));
// //4

// 3. Maximum Multiple => https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  if (bound % divisor === 0) {
    return bound;
  }
  if (bound === 0) return 0;
  return maxMultiple(divisor, bound - 1);
}
// console.log(maxMultiple(3, 10));
// // 9
// console.log(maxMultiple(7, 17));
// // 14
// console.log(maxMultiple(10, 50));
// // 50

// 4. JavaScript Array Filter => https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((num) => num % 2 === 0);
}

// 5. Max-min arrays => https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  let output = [];
  arr.sort((a, b) => b - a);

  if (arr.length % 2 !== 0) {
    output.push(arr[0]);
    arr.shift();

    for (let i = 0; i < arr.length / 2; i++) {
      output.push(arr[arr.length - i - 1]);
      output.push(arr[i]);
    }
    return output;
  }
  for (let i = 0; i < arr.length / 2; i++) {
    output.push(arr[i]);
    output.push(arr[arr.length - i - 1]);
  }
  return output;
}
// console.log(solve([84, 79, 76, 61, 78]));
// // [84,61,79,76,78]
// console.log(solve([52, 77, 72, 44, 74, 76, 40]));
// // [77,40,76,44,74,52,72]
// console.log(solve([1, 6, 9, 4, 3, 7, 8, 2]));
// // [9,1,8,2,7,3,6,4]
// console.log(solve([1, 2, 3, 4, 5]));

// 6. Return a string's even characters. => https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";
  return [...string].filter((letter, index) => index % 2 !== 0);
}
// console.log(evenChars("1234"));

// 7. Find the middle element => https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  const tripletCopied = [...triplet];
  triplet.sort((a, b) => a - b);
  return tripletCopied.indexOf(triplet[1]);
}
// console.log(gimme([2, 3, 1]));
// // 0
// console.log(gimme([5, 10, 14]));
// // 1
// console.log(gimme([2.1, 3.2, 1.4]));
// // 0
// console.log(gimme([5.9, 10.4, 14.2]));
// // 1

// 8. Ones and Zeros => https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[arr.length - 1 - i]) {
      sum += 2 ** i;
    }
  }
  return sum;
};
// console.log(binaryArrayToNumber([0, 0, 1, 0]));
// // 2;
// console.log(binaryArrayToNumber([1, 1, 1, 1]));
// 15;

// 9. Find the unique number => https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  let firstNum = arr[0];
  let duplicate = false;
  let secondNum;

  for (num of arr.splice(1)) {
    if (num === firstNum) {
      duplicate = true;
    } else {
      secondNum = num;
    }
  }
  if (duplicate) {
    return secondNum;
  } else {
    return firstNum;
  }
}
// console.log(findUniq([0, 0, 1]));
// //  1
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// //  2
// console.log(findUniq([1, 1, 2, 1, 1]));
// //  2
// console.log(findUniq([10, 3, 3, 3]));
// //  10

// 10. => https://www.codewars.com/kata/581e014b55f2c52bb00000f8
//helper fun to replace
String.prototype.replaceAt = function (index, char) {
  return this.slice(0, index) + char + this.slice(index + 1);
};
function decipherThis(str) {
  const strArr = str.split(" ");
  let newStr = "";
  for (word of strArr) {
    let wordNum = "";

    for (letter of word) {
      if (!isNaN(Number(letter))) {
        wordNum = wordNum + letter;
      }
    }

    const charInWord = word.slice(wordNum.length);
    wordNum = String.fromCharCode(Number(wordNum));
    let wordToSwitch = wordNum + charInWord;
    let lastLetter = wordToSwitch[1];
    let wordToSwitchLastEl = wordToSwitch[wordToSwitch.length - 1];

    if (wordToSwitch.length > 1) {
      wordToSwitch = wordToSwitch
        .replaceAt(1, wordToSwitchLastEl)
        .replaceAt(wordToSwitch.length - 1, lastLetter);
    }
    newStr += " " + wordToSwitch;
  }
  return newStr.slice(1);
}
// console.log(decipherThis("82yade 115te 103o"));
// console.log(
//   decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
// );
// console.log(decipherThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka"));

// 11. Sort the odd => https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  let oddNums = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  let oddCounter = 0;
  array.map((num, i) => {
    if (num % 2 !== 0) {
      array[i] = oddNums[oddCounter];
      oddCounter++;
    }
  });
  return array;
}
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
// // , [1, 3, 2, 8, 5, 4]);
// console.log(sortArray([5, 3, 1, 8, 0]));
// // , [1, 3, 5, 8, 0]);

//    Optional (advanced)
// 12. PaginationHelper => https://www.codewars.com/kata/515bb423de843ea99400000a
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    // this.collectionLen = this.itemCount();
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    // const collectionLen = this.itemCount();
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    const lastPageIndex = this.pageCount() - 1;
    const divisonRest = this.itemCount() % this.itemsPerPage;

    if (pageIndex > lastPageIndex || pageIndex < 0) return -1;
    if (pageIndex < lastPageIndex && pageIndex >= 0) return this.itemsPerPage;
    if (divisonRest === 0) {
      return this.itemsPerPage;
    }
    return divisonRest;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex > this.itemCount() - 1 || itemIndex < 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
const collection = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const helper = new PaginationHelper(collection, 10);
// console.log(helper.pageCount());
// 3;
// console.log(helper.itemCount());
// 24
// console.log(helper.pageItemCount(1));
// // 10
// console.log(helper.pageItemCount(2));
// // 4
// console.log(helper.pageItemCount(3));
// // -1
// console.log(helper.pageIndex(40));
// // );-1
// console.log(helper.pageIndex(22));
// // 2
// console.log(helper.pageIndex(3));
// // 0
// console.log(helper.pageIndex(0));
// // 0

// 13. Moving Zeros To The End => https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
  let zeroArr = [];
  let notZeroArr = [];
  arr.map((num) => (num === 0 ? zeroArr.push(num) : notZeroArr.push(num)));

  return notZeroArr.concat(zeroArr);
}
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
// [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];

// 14. => https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
function findUniq(arr) {
  let firstWord = arr[0];
  if (arr[0].trim() !== "") firstWord = arr[0].split(" ").join("");
  firstWord = firstWord.split("");
  let output;
  let secondDiffers = false;
  let thirdDiffers = false;

  for (let letter of firstWord) {
    const letterLower = letter.toLowerCase();
    for (let i = 1; i < arr.length; i++) {
      const wordLower = arr[i].toLowerCase();
      if (!wordLower.includes(letterLower)) {
        if (i === 1) secondDiffers = true;
        if (i === 2) thirdDiffers = true;
        output = arr[i];

        if (secondDiffers && thirdDiffers) {
          return arr[0];
        }
      }
    }
  }
  return output;
}
// console.log(findUniq(["aa", "aaa", "aaaaa", "bbb"]));
// console.log(findUniq(["bcf", "aaa", "aaaaa"]));
// console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
// // // 'BbBb');
// console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));
// // 'foo');
// console.log(findUniq(["silvia", "vasili", "victor"]));
// // 'victor');
// console.log(findUniq(["victor", "silvia", "vasili"]));
// // // 'victor');
// console.log(
//   findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"])
// );
// // 'Harry Potter'))
// console.log(findUniq(["    ", "a", " "]));
// // , 'a'

// 15. Sudoku Solver => https://www.codewars.com/kata/5296bc77afba8baa690002d7
function sudoku(puzzle) {
  let possibleNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const checkPossibleNums = (row, col, outputPuzzle) => {
    let rowUsedNums = outputPuzzle[row].filter((col) => col !== 0);
    let colUsedNums = [];
    for (let i = 0; i < outputPuzzle.length; i++) {
      colUsedNums.push(outputPuzzle[i][col]);
    }
    colUsedNums = colUsedNums.filter((col) => col !== 0);
    let usedNums = new Set([...rowUsedNums, ...colUsedNums]);

    let numsToUse = possibleNums.filter((num) => !usedNums.has(num));
    return numsToUse;
  };

  const solvePuzzle = (row, col, outputPuzzle) => {
    const lastPuzzleIndex = outputPuzzle.length - 1;
    const puzzleFilledOut = !outputPuzzle.some((arr) => arr.includes(0));

    if (row === lastPuzzleIndex && col === lastPuzzleIndex) {
      if (puzzleFilledOut) return outputPuzzle;
      solvePuzzle(0, 0, outputPuzzle);
    }
    console.log(outputPuzzle);
    let numsToUse = checkPossibleNums(row, col, outputPuzzle);
    if (puzzle[row][col] === 0 && numsToUse.length) {
      outputPuzzle[row][col] = numsToUse.shift();
    }
    if (col < lastPuzzleIndex) {
      solvePuzzle(row, col + 1, outputPuzzle);
    }
    if (row < lastPuzzleIndex) {
      solvePuzzle(row + 1, 0, outputPuzzle);
    }
  };
  return solvePuzzle(0, 0, puzzle);
}

const puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
// console.log(sudoku(puzzle));

// var solution = [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 1, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 1, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 0, 7, 9],
// ];

// const includes = (solution) => {
//   const puzzleFilledOut = !solution.some((arr) => arr.includes(0));
//   return puzzleFilledOut;
// };
// console.log(includes(solution));
