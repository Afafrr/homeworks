import { data, needleList } from "./MOCK_DATA.js";
const smallestOfNeedle = "1e63459f-0b18-4acf-9afc-e7287347bbeb";
const bigger = "3c511860-d159-457d-8374-e8205904e6f5";

const resultArr = [];
function searchStraightIncludes(skuArr) {
  for (const obj of data) {
    if (skuArr.includes(obj.sku)) {
      //   console.log(obj);
      resultArr.push(obj);
    }
    // if (arr.length === skuArr.length) break;
  }
  console.log(resultArr);
}
function searchStraight(skuArr) {
  for (const sku of skuArr) {
    for (const obj of data) {
      if (obj.sku === sku) {
        // console.log(obj);
        resultArr.push(obj);
      }
    }
  }
  console.log(resultArr);
}
function searchBinary(skuArr, itemToFind) {
  skuArr.sort();
  let firstIndex = 0;
  let lastIndex = skuArr.length - 1;

  while (lastIndex - firstIndex >= 0) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    let middleItem = skuArr[middleIndex];

    if (middleItem === itemToFind) {
      return middleItem;
    }
    if (middleItem < itemToFind) {
      firstIndex = middleIndex + 1;
    } else {
      lastIndex = middleIndex - 1;
    }
  }
}
function binarySkuSearch(skuArr) {
  for (const sku of needleList) {
  searchBinary()

  }
}

function performanceTest(fun) {
  let start = performance.now();
  console.log(fun());
  let timeTaken = performance.now() - start;

  console.log(timeTaken.toFixed(3), "ms");
}
const test = [-4, -1, 1, 2, 3, 4, 5, 6, 7, 8];
// performanceTest(() => searchStraightIncludes(needleList));
// performanceTest(() => searchStraight(needleList));
// performanceTest(() => searchBinary(test));
console.log(searchBinary(test, 5), "ti");
