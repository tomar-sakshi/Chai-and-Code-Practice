//function syntax

// function functionName() {}

//if else syntax

// if (condition1) {
// } else if (condition2) {
// } else if (condition3) {
// } else {
// }

// loops syntax
// const [one, two, ...bachaHua] = [12, 23, 34, 45]
// const arr = [12, 23, 34, 45];

const obj = {
  fName: "Sakshi",
  lName: "Tomar",
  age: 25,
  getName: function () {
    return this.fName;
  },
};

// for(let varName = initialValue; condition; increment/decrement){

// }

// for(let elementVar of Arrays) {
//      // usually used for arrays
//      // but object can be converted into arrays as well using Object.entries
// }
// eg-
// for (const element of Object.entries(obj)) {
//     const [key, value] = element;
//     console.log(element)
//     console.log(key, "- ", value)
// }

// for (let element in Objects) { // works on only object

// }
// eg -
const obj2 = {
  fName: "Sakshi",
  lName: "Tomar",
  age: 25,
  getName: function () {
    return this.fName;
  },
};
for (let elem in obj2) {
  // for in loop will be work on object.
  //   console.log(elem);
}

for (const element of Object.entries(obj)) {
  // Object.entries() method returns an array of the key/value pairs of an object.
  console.log(element);
}

// console.log(obj.entries);
// console.log(obj.fName, obj.getName())
