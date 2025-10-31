const str = "1"; //stirng
const num = 11; // number
const isTrue = true; // boolean
const Null = null; // null
let notValued; // undefined
console.log(typeof notValued);

const id1 = Symbol("1234");
const id2 = Symbol("1234");
console.log(id1 === id2); // false

// array
const array1 = ["name1", "name2"];
console.log(array1);

// object
let obj = {
  name: "Vishwesh",
  age: 19,
};
console.log(obj);

// function
const myFunc = function () {
  console.log("Hello!");
};
myFunc();
