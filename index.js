// O(1)

const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(1000).fill("nemo");

const findNemo = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === "nemo") {
      console.log("Found Nemo");
    }
  }
};

const findNemo2 = (arr) => {
  arr.forEach((fish) => {
    if (fish === "nemo") {
      console.log("Found Nemo");
    }
  });
};

// findNemo2(everyone);

const foundNemo = (arr) => {
  arr.map((fish) => {
    if (fish === "nemo") {
      console.log("Found Nemo!!");
    }
  });
};
// foundNemo(everyone);

// findNemo(nemo); // 0(n) - Linear Time
// findNemo(everyone);
// findNemo(large);

// const boxes = [0, 1, 2, 3, 4, 5];

const logFirstTwoBoxes = (arr) => {
  console.log(arr[0]);
  console.log(arr[1]);
};

// logFirstTwoBoxes(boxes);

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
// O(3 + 3n)
// console.log(funChallenge(10)); // 0(n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // 0(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// O(4 + 7n) still turns into O(n)
// console.log(anotherFunChallenge(10));

const printFirstitemThenFirstHalfThenSayHi100Times = (items) => {
  console.log(` first item ${items[0]}`);

  let middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log("Hi");
  }
};

// printFirstitemThenFirstHalfThenSayHi100Times([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Log all pairs of an array

const boxes = [1, 2, 3, 4, 5];

const logAllPairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
};

// logAllPairs(boxes);

const printAllNumbersThenAllPairSums = (numbers) => {
  console.log("these are numbers: "); // O(1)

  numbers.forEach((number) => {
    //O(n)
    console.log(number); //O(n)
  });

  console.log("and these are their sums:"); //O(1)

  numbers.forEach((firstNumber) => {
    numbers.forEach((secondNumber) => {
      console.log(firstNumber + secondNumber);
    });
  });

  // O(a^2)

  // O(n^2)
};

// printAllNumbersThenAllPairSums(boxes);

/////// ============== SPACE COMPLEXITY

const booo = (n) => {
  for (let i = 0; i < n; i++) {
    console.log("Boo!");
  }
};

// booo(10); //O(1)

const arrayOfHiNtimes = (n) => {
  let hiArray = []; // for space complexity creating a data structure
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
};

// console.log(arrayOfHiNtimes(10)); //O(n)

//// ================ Exercise: Twitter ============///////

// Find 1st and find the Nth...(or last)

const array = [
  { tweet: "hi", date: 2012 },
  { tweet: "my", date: 2014 },
  { tweet: "teddy", date: 2018 },
];

array[0]; // O(1)
array[array.length - 1]; //O(1)

///// ===== Section 4: How To Solve Coding Problems ======= /////

const arrSorted = [1, 2, 4, 4];
const arrNotSorted = [4, 1, 4, 2];

const findEight = (arr) => {
  let sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === 8) {
      sumArr = [arr[i], arr[i + 1]];
    }
  }
  console.log(sumArr);
};

// findEight(arr);

const findEight2 = (arr) => {
  let sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[arr.length - 1] === 8) {
      sumArr = [arr[i], arr[arr.length - 1]];
    }
  }
  return sumArr;
};

// console.log(findEight2(arr));

// const arr1 = ["a", "b", "c", "x"];
// const arr2 = ["z", "y", "i"];

// const arr3 = ["a", "b", "c", "x"];
// const arr4 = ["z", "y", "x"];

//brute force way -- not recccomended to code but rather explain this solution and why it wouldnt be best

// this solution is O(n^2)
const containsCommonItem = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
};

// console.log(containsCommonItem(arr1, arr2));
// console.log(containsCommonItem(arr3, arr4));

//array1 ==> obj {
//  a: true,
//  b: true,
//  c: true,
//  x: true
//}
// array2[index] === obj.properties

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "x"];

const containsCommonItem1 = (arr1, arr2) => {
  // loop through first array and create object where properties  === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  //loop through second array and check if item in second array exist on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}; // O(a+b)

// console.log(containsCommonItem1(arr1, arr2));

///// ========== SECTION 5 ======== //////
///// === Data Structures & Algorithms === ///

///// ========== SECTION 6 ======== //////
///// =========== Arrays =========//////

const strings = ["a", "b", "c", "d"];

// push
strings.push("e"); // O(1)

// pop
strings.pop(); // O(1)

// unshift
strings.unshift("x"); //O(n)

// splice
strings.splice(2, 0, "alien"); //O(n)

// console.log(strings);

// IMPLEMENTING ARRAYS

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    // O(n)
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
// newArray.push("a");
// newArray.push("b");
// newArray.push("c");
// newArray.delete(1);
// // newArray.pop();
// console.log(newArray);

///// ====== /////
// REVERSE A STRING //

const string = "";

const reverse = (str) => {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return " That's not good";
  }
  const arrStr = str.split("");
  const arr = [];
  for (let i = 1; i <= arrStr.length; i++) {
    let lastLetter = arrStr[arrStr.length - i];
    arr.push(lastLetter);
  }
  return arr.join("");
};

const reverse2 = (str) => str.split("").reverse().join("");
const reverse3 = (str) => [...str].reverse.join("");

// console.log(reverse2("Hello I am cool"));

////// Merge Sorted Arrays ////

const mergeSortedArrays1 = (arr1, arr2) => {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
};
// console.log(mergeSortedArrays1([0, 3, 4, 31], [4, 6, 30]));

const mergeSortedArrays2 = (arr1, arr2) => {
  if (arr1 < 1 || arr2 < 1) return;
  const newArr = [...arr1, ...arr2].sort((a, b) => a - b);

  console.log(newArr);
};

// mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]);

// Maximum Subarray //

const maxSubArray = (arr) => {
  let maxSub = arr[0];

  let currentSum = 0;
  if (arr.length === 0) {
    return;
  }
  for (const n in arr) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += arr[n];
    maxSub = Math.max(maxSub, currentSum);
  }
  if (maxSub < 0) {
    return 0;
  } else {
    return maxSub;
  }
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Two Sum

// take arrays of integers and return the indexes of
// the numbers that equal the target

// output should return an array if indicies

const twoSums = (arr, target) => {
  if (arr.length === 0) {
    return "cannot return an empty array";
  }

  const outputArr = [];
  let n = 0;

  for (let i = 0; i < arr.length; i++) {
    n = arr[i];
    if (n < target) {
      const diff = target - n;
      if (arr.includes(diff)) {
        outputArr.push(i);
      }
    }
  }
  console.log(outputArr);
  // return outputArr;
};

twoSums([11, 7, 15, 2], 9);
twoSums([2, 7, 15, 11], 9);
twoSums([3, 2, 4], 6);
///// ============= SECTION 7 ======== /////
///// ===== Data Structures: Hash Tables (Objects) ==== //////
