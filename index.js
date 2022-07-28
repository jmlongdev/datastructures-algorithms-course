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

logAllPairs(boxes);
