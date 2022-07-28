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

const boxes = [0, 1, 2, 3, 4, 5];

const logFirstTwoBoxes = (arr) => {
  console.log(arr[0]);
  console.log(arr[1]);
};

// logFirstTwoBoxes(boxes);

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

// console.log(funChallenge(10)); // 0(n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}

console.log(anotherFunChallenge(10));
