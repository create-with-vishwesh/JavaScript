// console.log("2" > 1);
// console.log("02" > 1);

console.log(null == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null <= 0); // true
console.log(null >= 0); // true

/*
above two line (Line No.: [7],[8]) both give true because, in JS, comparision and equality check behave differently.
Comparisions convert null --> num and treat it as 0.
Equality check NOT convert it.

* NOTE: This type of conversion should be avoided not even the clear code include this type of conversion.

*/
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false
console.log(undefined < 0); // false
console.log(undefined <= 0); // false

/* 
Strict Check:

it also checks datatypes of both the operands
*/

console.log(1 === 1); // true 1 == 1 also datatype of LHS = datatype of zRHS
console.log(1 === true); // false
