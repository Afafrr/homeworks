import { data, needleList } from "./MOCK_DATA.js";
import * as fs from "fs";

const smallestOfNeedle = "1e63459f-0b18-4acf-9afc-e7287347bbeb";
const bigger = "3c511860-d159-457d-8374-e8205904e6f5";

const resultArr = [];
//straight search with includes
function searchStraightIncludes(skuArr) {
  for (const obj of data) {
    if (skuArr.includes(obj.sku)) {
      resultArr.push(obj);
    }
  }
  return resultArr;
}
//straight search
function searchStraight(skuArr) {
  for (const obj of data) {
    for (const sku of skuArr) {
      if (obj.sku === sku) {
        resultArr.push(obj);
      }
    }
    if (skuArr.length === resultArr.length) break;
  }
  return resultArr;
}

function searchBinary(itemToFind, dataArr) {
  let firstIndex = 0;
  let lastIndex = dataArr.length - 1;

  while (lastIndex - firstIndex >= 0) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    let middleItem = dataArr[middleIndex];
    if (middleItem.sku === itemToFind) {
      return middleItem;
    }
    if (middleItem.sku < itemToFind) {
      firstIndex = middleIndex + 1;
    } else {
      lastIndex = middleIndex - 1;
    }
  }
  return -1;
}
//binary search
function binarySkuSearch() {
  // const data1 = jsSort(data);
  const data1 = mergeSort(data);
  // const data1 = quickSort(data);

  const arr = [];
  for (const sku of needleList) {
    const result = searchBinary(sku, data1);
    arr.push(result);
  }
  return arr;
}

//quick sort
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivotObj = arr[Math.floor(arr.length / 2)];
  const pivotSku = pivotObj["sku"];

  if (!pivotSku) return arr;
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    if (currNum["sku"] < pivotSku) {
      leftArr.push(currNum);
    }
    if (currNum["sku"] > pivotSku) {
      rightArr.push(currNum);
    }
  }
  return [...quickSort(leftArr), pivotObj, ...quickSort(rightArr)];
};

//merge sort
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const middleEl = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleEl);
  const rightArr = arr.slice(middleEl);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  const tempArr = [];
  while (left.length && right.length) {
    if (left[0].sku < right[0].sku) {
      tempArr.push(left[0]);
      left.shift();
    } else {
      tempArr.push(right[0]);
      right.shift();
    }
  }
  return [...tempArr, ...left, ...right];
}
function jsSort(arr) {
  return arr.sort((a, b) => a.sku.localeCompare(b.sku));
}

function performanceTest(fun, param, comment = "") {
  let start = performance.now();
  fun(param);
  console.log(fun(param));
  let timeTaken = (performance.now() - start).toFixed(3);
  console.log(timeTaken, "ms");

  const fileMess = `\n${fun.name}: ${timeTaken} ms ${comment}`;
  fs.writeFile("./result.log", fileMess, { flag: "a" }, (err) => {
    if (err) console.log(err);
    else console.log("File updated");
  });
}

// performanceTest(searchStraightIncludes, needleList);
// performanceTest(searchStraight, needleList);
// performanceTest(binarySkuSearch, "", "(quick sorting method)");
performanceTest(quickSort, data, "(only sorting mock_data)");
// performanceTest(mergeSort, data, "(only sorting mock_data)");
// performanceTest(jsSort, data, "(only sorting mock_data)");

//sorted
// console.log(mergeSort, data);
// [
//   {
//     sku: '00123ba6-75c4-47c7-bc51-550908a9ad31',
//     name: 'Syrup - Monin - Blue Curacao',
//     price: '£21.18',
//     pack: 5
//   },
//   {
//     sku: '0043b01f-2d26-4c00-8f8a-8a3249cc96f0',
//     name: 'Truffle Cups Green',
//     price: '£8.60',
//     pack: 5
//   },
//   {
//     sku: '004dbac6-2a24-4c74-bd1a-377d3f919902',
//     name: 'Chicken - Whole Fryers',
//     price: '£21.49',
//     pack: 10
//   },
//   {
//     sku: '006cf254-cbba-4122-9c2e-d5f4f6ae3a52',
//     name: 'Rosemary - Dry',
//     price: '£12.21',
//     pack: 10
//   },
//   {
//     sku: '00b60b8d-7447-4e15-9735-ff2fae5c62d9',
//     name: 'Cake Slab',
//     price: '£10.29',
//     pack: 20
//   },
//   {
//     sku: '00bdd451-bb4c-4959-909e-a2e12358b53a',
//     name: 'Ecolab - Hand Soap Form Antibac',
//     price: '£21.34',
//     pack: 1
//   },
//   {
//     sku: '00c40fb0-ef90-4c6c-af58-957a291b4c9d',
//     name: 'Chicken - Base',
//     price: '£14.56',
//     pack: 5
//   },
//   {
//     sku: '00c85f42-3d1c-4155-9079-afde8e8614bf',
//     name: 'Lamb - Loin, Trimmed, Boneless',
//     price: '£21.62',
//     pack: 20
//   },
//   {
//     sku: '00f3aeb6-86ca-4f60-8268-f68276472049',
//     name: 'Hagen Daza - Dk Choocolate',
//     price: '£19.07',
//     pack: 5
//   },
//   {
//     sku: '01551f4a-5dd0-440c-ba6d-3a7344135404',
//     name: 'Nut - Walnut, Pieces',
//     price: '£13.81',
//     pack: 1
//   },
//   {
//     sku: '015c1869-98b8-4143-8b29-a497ff5710c5',
//     name: 'White Baguette',
//     price: '£12.60',
//     pack: 15
//   },
//   {
//     sku: '016d9bf8-523b-45e0-a2db-0178e6f41762',
//     name: 'Bread - Mini Hamburger Bun',
//     price: '£17.09',
//     pack: 15
//   },
//   {
//     sku: '01d2bd36-e291-47bb-b6e3-3ccaf9b003ef',
//     name: 'Salt - Celery',
//     price: '£17.21',
//     pack: 1
//   },
//   {
//     sku: '01d411fd-0079-40db-9801-4660c925b621',
//     name: 'Longos - Burritos',
//     price: '£9.81',
//     pack: 10
//   },
//   {
//     sku: '021d0ddf-0611-4859-947e-51453e23208a',
//     name: 'Tray - 12in Rnd Blk',
//     price: '£17.81',
//     pack: 5
//   },
//   {
//     sku: '022e2121-50f9-4a3d-92e0-869dddabbbe8',
//     name: 'Sauce - Oyster',
//     price: '£14.42',
//     pack: 10
//   },
//   {
//     sku: '0264df0b-1c9b-4f24-b521-242020de138f',
//     name: 'Cheese - Cheddarsliced',
//     price: '£18.28',
//     pack: 20
//   },
//   {

// last
// {
//   sku: '15081f40-7752-472c-8287-9b9101e866ca',
//   name: 'Scallop - St. Jaques',
//   price: '£16.78',
//   pack: 15
// },
// {
//   sku: '1581a636-9e74-44f1-86ef-db2ef47b7c23',
//   name: 'Fish - Bones',
//   price: '£3.42',
//   pack: 1
// },
// ... 900 more items
