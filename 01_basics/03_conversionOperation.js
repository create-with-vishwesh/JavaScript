/*
 "33" -> 33
 "33abc" -> NaN
 true -> 1; false -> 0
 */

let score = 33;

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = "33abc";
console.log(typeof score);
console.log(typeof score);

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = null;
console.log(typeof score);
console.log(typeof score);

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// score = false; // 0
score = true; //1
console.log(typeof score);
console.log(typeof score);

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = "String";
console.log(typeof score);
console.log(typeof score);

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = null;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 = true
// 0 = false
// "V" = true
// "" = false
// null = false
// defined = false


let someNum = 33
let stringnNum = String(someNum);
console.log(stringnNum);
console.log(typeof stringnNum);
