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

// ------------------ Memory ------------------ //

/* 
        Stack                      Heap
      primitive                 non-primitive

*/

// Stored in Stack: no refrence (gives copy)
let name = "name1";
let orgName = name;
orgName = "Vishwesh";

console.log(name);
console.log(orgName);

// Stored in Heap: one refrenece (give full access)
let user1 = {
  email: "user@gmail.com",
  age: 25,
};

let mainUser = user1;
mainUser.email = "vishwesh@google.com";
console.log(user1.email);
console.log(mainUser.email);
